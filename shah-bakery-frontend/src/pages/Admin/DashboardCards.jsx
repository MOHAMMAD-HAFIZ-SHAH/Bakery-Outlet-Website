const stats = [
  {
    title: "Revenue",
    value: "₹1,25,000"
  },
  {
    title: "Orders",
    value: "542"
  },
  {
    title: "Customers",
    value: "314"
  },
  {
    title: "Outlets",
    value: "2"
  }
];

const DashboardCards = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

      {stats.map((item,index) => (

        <div
          key={index}
          className="bg-white rounded-[30px] p-10 shadow-lg"
        >

          <p className="uppercase tracking-[3px] text-xs text-[#7f6a52]">
            {item.title}
          </p>

          <h2 className="serif text-5xl text-[var(--warmBrown)] mt-5">
            {item.value}
          </h2>

        </div>

      ))}

    </div>
  );
};

export default DashboardCards;