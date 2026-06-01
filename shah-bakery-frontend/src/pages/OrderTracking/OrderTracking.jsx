import MainLayout from "../../layouts/MainLayout";

const steps = [
  "Order Confirmed",
  "Preparing",
  "Ready For Pickup",
  "Completed"
];

const OrderTracking = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-32 bg-[var(--cream)]">

        <div className="container-custom max-w-5xl">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
              Tracking
            </p>

            <h1 className="serif text-[4rem] md:text-[6rem] text-[var(--deepBrown)]">
              Live Order Status
            </h1>

          </div>

          <div className="bg-white rounded-[40px] p-14 shadow-lg">

            <div className="space-y-10">

              {steps.map((item,index) => (

                <div
                  key={index}
                  className="flex items-center gap-8"
                >

                  <div className="w-8 h-8 rounded-full bg-[var(--warmBrown)]" />

                  <h2 className="serif text-4xl text-[var(--deepBrown)]">
                    {item}
                  </h2>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default OrderTracking;