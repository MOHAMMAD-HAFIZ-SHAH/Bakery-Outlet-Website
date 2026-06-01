import MainLayout from "../../layouts/MainLayout";

const outlets = [
  {
    name:"Nuner Outlet",
    location:"Ganderbal Kashmir"
  },
  {
    name:"Babawayil Outlet",
    location:"Ganderbal Kashmir"
  }
];

const OutletSelection = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-32 bg-[var(--cream)]">

        <div className="container-custom">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
              Select Outlet
            </p>

            <h1 className="serif text-[4rem] md:text-[6rem] text-[var(--deepBrown)]">
              Choose Your Branch
            </h1>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {outlets.map((item,index) => (

              <div
                key={index}
                className="bg-white rounded-[35px] p-14 shadow-lg"
              >

                <h2 className="serif text-5xl text-[var(--deepBrown)]">
                  {item.name}
                </h2>

                <p className="mt-5 text-[#7f6a52] text-lg">
                  {item.location}
                </p>

                <button className="mt-10 bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white px-10 py-5 rounded-full uppercase tracking-[3px] text-sm">

                  Select Outlet

                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default OutletSelection;