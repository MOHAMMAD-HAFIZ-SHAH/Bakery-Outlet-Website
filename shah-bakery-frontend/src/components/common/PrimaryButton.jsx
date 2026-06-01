const PrimaryButton = ({ text }) => {
  return (
    <button className="bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white px-8 py-4 rounded-full uppercase tracking-[3px] text-sm">

      {text}

    </button>
  );
};

export default PrimaryButton;