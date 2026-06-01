const orders = [
  {
    id: "#SB1001",
    customer: "Ahmed",
    total: "₹580",
    status: "Preparing"
  },
  {
    id: "#SB1002",
    customer: "Bilal",
    total: "₹1240",
    status: "Ready"
  }
];

const OrdersTable = () => {
  return (
    <div className="bg-white rounded-[35px] overflow-hidden shadow-lg">

      <table className="w-full">

        <thead className="bg-[var(--deepBrown)] text-white">

          <tr>

            <th className="p-5 text-left">Order ID</th>

            <th className="p-5 text-left">Customer</th>

            <th className="p-5 text-left">Amount</th>

            <th className="p-5 text-left">Status</th>

            <th className="p-5 text-left">Update</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((item) => (

            <tr key={item.id} className="border-b">

              <td className="p-5">{item.id}</td>

              <td className="p-5">{item.customer}</td>

              <td className="p-5">{item.total}</td>

              <td className="p-5">{item.status}</td>

              <td className="p-5">

                <select className="border rounded-full px-4 py-2">

                  <option>Pending</option>
                  <option>Preparing</option>
                  <option>Ready</option>
                  <option>Completed</option>

                </select>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default OrdersTable;