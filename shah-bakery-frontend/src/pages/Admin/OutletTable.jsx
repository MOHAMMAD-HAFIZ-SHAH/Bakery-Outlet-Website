const outlets = [
  {
    id: 1,
    name: "Nuner Outlet",
    address: "Ganderbal Kashmir",
    status: true
  },
  {
    id: 2,
    name: "Babawayil Outlet",
    address: "Ganderbal Kashmir",
    status: true
  }
];

const OutletTable = () => {
  return (
    <div className="bg-white rounded-[35px] overflow-hidden shadow-lg">

      <table className="w-full">

        <thead className="bg-[var(--deepBrown)] text-white">

          <tr>

            <th className="p-5 text-left">
              Outlet Name
            </th>

            <th className="p-5 text-left">
              Address
            </th>

            <th className="p-5 text-left">
              Status
            </th>

            <th className="p-5 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {outlets.map((item) => (

            <tr
              key={item.id}
              className="border-b"
            >

              <td className="p-5">
                {item.name}
              </td>

              <td className="p-5">
                {item.address}
              </td>

              <td className="p-5">

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs">

                  Active

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

export default OutletTable;