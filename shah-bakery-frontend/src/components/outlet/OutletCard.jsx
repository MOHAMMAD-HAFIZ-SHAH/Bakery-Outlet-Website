const OutletCard = ({ item }) => {
  return (
    <div className="bg-white rounded-[35px] overflow-hidden shadow-lg">

      <img
        src={item.image}
        alt=""
        className="w-full h-[320px] object-cover"
      />

      <div className="p-10">

        <h2 className="serif text-5xl text-[var(--deepBrown)]">
          {item.name}
        </h2>

        <p className="mt-5 text-[#7f6a52]">
          {item.location}
        </p>

        <button className="mt-10 bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white px-8 py-4 rounded-full uppercase tracking-[3px] text-sm">

          Select Outlet

        </button>

      </div>

    </div>
  );
};

export default OutletCard;