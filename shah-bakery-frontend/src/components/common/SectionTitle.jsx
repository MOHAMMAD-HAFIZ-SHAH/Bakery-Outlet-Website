const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
        {subtitle}
      </p>

      <h2 className="serif text-[3rem] md:text-[5rem] text-[var(--deepBrown)]">
        {title}
      </h2>

    </div>
  );
};

export default SectionTitle;