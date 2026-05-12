type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <header className={align === "center" ? "mx-auto mb-10 max-w-2xl text-center" : "mb-10 max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase text-brand-green">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">{title}</h2>
      {description ? <p className="mt-3 text-base text-text-muted">{description}</p> : null}
    </header>
  );
}
