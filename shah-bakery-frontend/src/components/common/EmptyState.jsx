const EmptyState = ({ title, subtitle }) => {
  return (
    <div className="py-32 text-center">

      <h2 className="serif text-[4rem] text-[var(--deepBrown)]">
        {title}
      </h2>

      <p className="mt-6 text-[#7f6a52] text-lg">
        {subtitle}
      </p>

    </div>
  );
};

export default EmptyState;