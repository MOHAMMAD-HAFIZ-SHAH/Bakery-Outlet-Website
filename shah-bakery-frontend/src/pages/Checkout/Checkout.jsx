import MainLayout from "../../layouts/MainLayout";

const Checkout = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-32 bg-[var(--cream)]">

        <div className="container-custom max-w-6xl">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
              Checkout
            </p>

            <h1 className="serif text-[4rem] md:text-[6rem] text-[var(--deepBrown)]">
              Complete Your Order
            </h1>

          </div>

          <div className="grid lg:grid-cols-2 gap-14">

            <div className="bg-white rounded-[35px] p-12 shadow-lg">

              <h2 className="serif text-4xl text-[var(--deepBrown)] mb-10">
                Customer Details
              </h2>

              <div className="flex flex-col gap-7">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-[#eee] rounded-full px-7 py-5 outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-[#eee] rounded-full px-7 py-5 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-[#eee] rounded-full px-7 py-5 outline-none"
                />

              </div>

            </div>

            <div className="bg-white rounded-[35px] p-12 shadow-lg">

              <h2 className="serif text-4xl text-[var(--deepBrown)] mb-10">
                Payment Summary
              </h2>

              <div className="space-y-6">

                <div className="flex justify-between text-lg">

                  <span>Subtotal</span>

                  <span>₹540</span>

                </div>

                <div className="flex justify-between text-lg">

                  <span>GST</span>

                  <span>₹40</span>

                </div>

                <div className="border-t pt-6 flex justify-between text-3xl font-semibold text-[var(--warmBrown)]">

                  <span>Total</span>

                  <span>₹580</span>

                </div>

              </div>

              <button className="w-full mt-12 bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white py-5 rounded-full uppercase tracking-[3px] text-sm">

                Pay Now

              </button>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default Checkout;