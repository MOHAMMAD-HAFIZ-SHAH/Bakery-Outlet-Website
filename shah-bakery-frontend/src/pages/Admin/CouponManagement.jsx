import MainLayout from "../../layouts/MainLayout";

const CouponManagement = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-24">

        <div className="container-custom">

          <h1 className="serif text-6xl text-[var(--deepBrown)] mb-12">
            Coupon Management
          </h1>

          <div className="bg-white rounded-[35px] p-10 shadow-lg">

            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-[#eee] rounded-full px-6 py-4 w-full mb-6"
            />

            <input
              type="number"
              placeholder="Discount %"
              className="border border-[#eee] rounded-full px-6 py-4 w-full mb-6"
            />

            <button className="bg-[var(--warmBrown)] text-white px-8 py-4 rounded-full uppercase tracking-[3px] text-sm">

              Create Coupon

            </button>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default CouponManagement;