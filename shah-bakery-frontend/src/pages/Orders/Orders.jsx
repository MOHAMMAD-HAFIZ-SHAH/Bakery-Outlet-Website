import MainLayout from "../../layouts/MainLayout";

const orders = [
  {
    id:"#SB1024",
    total:"₹540",
    date:"21 May 2026",
    status:"Completed"
  },
  {
    id:"#SB1025",
    total:"₹850",
    date:"20 May 2026",
    status:"Preparing"
  }
];

const Orders = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-32 bg-[var(--cream)]">

        <div className="container-custom">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
              Orders
            </p>

            <h1 className="serif text-[4rem] md:text-[6rem] text-[var(--deepBrown)]">
              Order History
            </h1>

          </div>

          <div className="space-y-8">

            {orders.map((item,index) => (

              <div
                key={index}
                className="bg-white rounded-[35px] p-10 shadow-lg flex flex-col lg:flex-row justify-between gap-10"
              >

                <div>

                  <h2 className="serif text-4xl text-[var(--deepBrown)]">
                    {item.id}
                  </h2>

                  <p className="mt-4 text-[#7f6a52]">
                    {item.date}
                  </p>

                </div>

                <div className="flex items-center gap-10">

                  <p className="text-3xl text-[var(--warmBrown)] font-semibold">
                    {item.total}
                  </p>

                  <span className="bg-[var(--parchment)] px-6 py-3 rounded-full uppercase tracking-[3px] text-xs">

                    {item.status}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default Orders;