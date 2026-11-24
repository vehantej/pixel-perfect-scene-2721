// Plain JS worker served from /public — NOT processed by Vite.
// Pyodide is loaded via importScripts (the documented, reliable worker pattern).
const PYODIDE_VERSION = "0.28.3";
const BASE = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

let pyodidePromise = null;
let ready = false;

async function loadPyodideApi() {
  if (!pyodidePromise) {
    pyodidePromise = (async () => {
      importScripts(BASE + "pyodide.js");
      return loadPyodide({ indexURL: BASE });
    })();
  }
  const py = await pyodidePromise;
  if (!ready) {
    ready = true;
    postMessage({ type: "ready" });
  }
  return py;
}

const RUNNER = `
import sys, io, traceback
_out = io.StringIO()
_err = io.StringIO()
_old_out, _old_err = sys.stdout, sys.stderr
sys.stdout, sys.stderr = _out, _err
_status = "ok"
try:
    exec(compile(_pa_user_code, "terminal.py", "exec"), {})
except SystemExit:
    pass
except BaseException:
    _status = "error"
    traceback.print_exc()
finally:
    sys.stdout, sys.stderr = _old_out, _old_err
_pa_out = _out.getvalue()
_pa_err = _err.getvalue()
_pa_status = _status
`;

self.onmessage = async (event) => {
  const { id, code } = event.data;
  const result = { status: "ok", stdout: "", stderr: "" };
  let py;
  try {
    py = await loadPyodideApi();
  } catch (err) {
    postMessage({ type: "load-error", message: err && err.message ? err.message : String(err) });
    return;
  }
  try {
    py.globals.set("_pa_user_code", code);
    py.runPython(RUNNER);
    result.status = py.globals.get("_pa_status") === "error" ? "error" : "ok";
    result.stdout = String(py.globals.get("_pa_out") ?? "");
    result.stderr = String(py.globals.get("_pa_err") ?? "");
  } catch (err) {
    result.status = "error";
    result.stderr = err && err.message ? err.message : String(err);
  }
  postMessage({ id, result });
};