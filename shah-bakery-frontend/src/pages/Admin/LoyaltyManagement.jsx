import MainLayout from "../../layouts/MainLayout";

const LoyaltyManagement = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-24">

        <div className="container-custom">

          <h1 className="serif text-6xl text-[var(--deepBrown)] mb-12">
            Loyalty Management
          </h1>

          <div className="bg-white rounded-[35px] p-10 shadow-lg">

            <label className="block mb-3">
              Points Per ₹100 Purchase
            </label>

            <input
              type="number"
              className="border border-[#eee] rounded-full px-6 py-4 w-full"
              defaultValue="10"
            />

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default LoyaltyManagement;