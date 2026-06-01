const outlets = [
  {
    name:"Nuner Outlet",
    address:"Ganderbal, Kashmir"
  },
  {
    name:"Babawayil Outlet",
    address:"Ganderbal, Kashmir"
  }
];

const Outlets = () => {
  return (
    <section className="py-32 bg-[var(--deepBrown)] text-white">

      <div className="container-custom">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
            Branches
          </p>

          <h2 className="serif text-[3rem] md:text-[5rem]">
            Visit Our Outlets
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {outlets.map((item,index) => (

            <div
              key={index}
              className="border border-[#5f4933] rounded-[35px] p-12"
            >

              <h3 className="serif text-5xl mb-6">
                {item.name}
              </h3>

              <p className="text-[#c9b39a] text-lg">
                {item.address}
              </p>

              <button className="mt-10 border border-[var(--gold)] text-[var(--gold)] px-8 py-4 rounded-full uppercase tracking-[3px] text-sm hover:bg-[var(--gold)] hover:text-black transition">

                Select Outlet

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Outlets;