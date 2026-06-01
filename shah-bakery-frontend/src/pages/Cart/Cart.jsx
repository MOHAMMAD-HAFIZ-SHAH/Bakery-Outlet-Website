import MainLayout from "../../layouts/MainLayout";

const Cart = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-32 bg-[var(--cream)]">

        <div className="container-custom">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
              Your Cart
            </p>

            <h1 className="serif text-[4rem] text-[var(--deepBrown)]">
              Shopping Cart
            </h1>

          </div>

          <div className="bg-white rounded-[35px] p-12 shadow-lg">

            <div className="flex items-center justify-between border-b pb-8">

              <div>

                <h2 className="serif text-4xl text-[var(--deepBrown)]">
                  Chocolate Pastry
                </h2>

                <p className="text-[#7f6a52] mt-3">
                  Quantity: 2
                </p>

              </div>

              <p className="text-2xl font-semibold text-[var(--warmBrown)]">
                ₹240
              </p>

            </div>

            <div className="mt-12 flex justify-between items-center">

              <h3 className="serif text-5xl text-[var(--deepBrown)]">
                Total
              </h3>

              <h3 className="text-5xl text-[var(--warmBrown)] font-semibold">
                ₹240
              </h3>

            </div>

            <button className="w-full mt-12 bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white py-5 rounded-full uppercase tracking-[3px] text-sm">

              Proceed To Checkout

            </button>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default Cart;