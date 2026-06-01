const filters = [
  "Popular",
  "Newest",
  "Veg",
  "Non Veg",
  "Desserts"
];

const MenuFilters = () => {
  return (
    <div className="flex flex-wrap gap-4">

      {filters.map((item,index) => (

        <button
          key={index}
          className="bg-white border border-[#eee] px-6 py-3 rounded-full uppercase tracking-[2px] text-xs hover:bg-[var(--warmBrown)] hover:text-white transition"
        >

          {item}

        </button>

      ))}

    </div>
  );
};

export default MenuFilters;