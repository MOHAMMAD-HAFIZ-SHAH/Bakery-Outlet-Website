import MainLayout from "../../layouts/MainLayout";

const Settings = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-24">

        <div className="container-custom">

          <h1 className="serif text-6xl text-[var(--deepBrown)] mb-12">
            Settings
          </h1>

          <div className="bg-white rounded-[35px] p-10 shadow-lg">

            <div className="mb-8">

              <label className="block mb-3">
                Bakery Name
              </label>

              <input
                type="text"
                className="w-full border border-[#eee] rounded-full px-6 py-4"
                defaultValue="Shah Bakery"
              />

            </div>

            <div>

              <label className="block mb-3">
                Contact Number
              </label>

              <input
                type="text"
                className="w-full border border-[#eee] rounded-full px-6 py-4"
              />

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default Settings;