const products = [
  {
    id: 1,
    name: "Chocolate Pastry",
    category: "Bakery",
    price: "120",
    outlet: "Nuner",
    available: true
  },
  {
    id: 2,
    name: "Chicken Burger",
    category: "Fast Food",
    price: "180",
    outlet: "Babawayil",
    available: true
  }
];

const MenuTable = () => {
  return (
    <div className="bg-white rounded-[35px] overflow-hidden shadow-lg">

      <table className="w-full">

        <thead className="bg-[var(--deepBrown)] text-white">

          <tr>

            <th className="p-5 text-left">Product</th>

            <th className="p-5 text-left">Category</th>

            <th className="p-5 text-left">Price</th>

            <th className="p-5 text-left">Outlet</th>

            <th className="p-5 text-left">Status</th>

            <th className="p-5 text-left">Actions</th>

          </tr>

        </thead>

        <tbody>

          {products.map((item) => (

            <tr
              key={item.id}
              className="border-b"
            >

              <td className="p-5">{item.name}</td>

              <td className="p-5">{item.category}</td>

              <td className="p-5">₹{item.price}</td>

              <td className="p-5">{item.outlet}</td>

              <td className="p-5">

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs">

                  Available

                </span>

              </td>

              <td className="p-5 flex gap-3">

                <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-xs">

                  Edit

                </button>

                <button className="bg-red-500 text-white px-4 py-2 rounded-full text-xs">

                  Delete

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default MenuTable;