const categories = [
  "Bakery",
  "Fast Food",
  "Pizza",
  "Wazwan",
  "Biryani",
  "Ice Cream",
  "Beverages"
];

const CategorySidebar = () => {
  return (
    <div className="bg-white rounded-[35px] p-10 shadow-lg">

      <h3 className="text-3xl font-bold mb-8">
        Categories
      </h3>

      <div className="flex flex-col gap-4">

        {categories.map((item,index) => (

          <button
            key={index}
            className="text-left border rounded-full px-5 py-3 hover:bg-[var(--warmBrown)] hover:text-white transition"
          >
            {item}
          </button>

        ))}

      </div>

    </div>
  );
};

export default CategorySidebar;