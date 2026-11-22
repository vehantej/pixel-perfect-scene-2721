interface SectionHeadingProps {
  kicker: string;
  title: string;
  copy?: string;
}

export function SectionHeading({ kicker, title, copy }: SectionHeadingProps) {
  return (
    <div className="section-heading" data-reveal>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}