import MainLayout from "../../layouts/MainLayout";

const offers = [
  {
    code:"WELCOME10",
    discount:"10% OFF"
  },
  {
    code:"PIZZA20",
    discount:"20% OFF"
  }
];

const Offers = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-32 bg-[var(--cream)]">

        <div className="container-custom">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
              Offers
            </p>

            <h1 className="serif text-[4rem] md:text-[6rem] text-[var(--deepBrown)]">
              Exclusive Deals
            </h1>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {offers.map((item,index) => (

              <div
                key={index}
                className="bg-[var(--deepBrown)] text-white rounded-[35px] p-14"
              >

                <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm">
                  Coupon Code
                </p>

                <h2 className="serif text-6xl mt-8">
                  {item.code}
                </h2>

                <p className="mt-6 text-2xl">
                  {item.discount}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default Offers;