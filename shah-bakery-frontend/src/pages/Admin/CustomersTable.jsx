const customers = [
  {
    id: 1,
    name: "Ahmed Khan",
    email: "ahmed@gmail.com",
    orders: 14,
    loyalty: 320
  },
  {
    id: 2,
    name: "Bilal Ahmad",
    email: "bilal@gmail.com",
    orders: 9,
    loyalty: 180
  }
];

const CustomersTable = () => {
  return (
    <div className="bg-white rounded-[35px] overflow-hidden shadow-lg">

      <table className="w-full">

        <thead className="bg-[var(--deepBrown)] text-white">

          <tr>

            <th className="p-5 text-left">Customer</th>

            <th className="p-5 text-left">Email</th>

            <th className="p-5 text-left">Orders</th>

            <th className="p-5 text-left">Points</th>

            <th className="p-5 text-left">Actions</th>

          </tr>

        </thead>

        <tbody>

          {customers.map((customer) => (

            <tr
              key={customer.id}
              className="border-b"
            >

              <td className="p-5">
                {customer.name}
              </td>

              <td className="p-5">
                {customer.email}
              </td>

              <td className="p-5">
                {customer.orders}
              </td>

              <td className="p-5">
                {customer.loyalty}
              </td>

              <td className="p-5">

                <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-xs">

                  View

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default CustomersTable;