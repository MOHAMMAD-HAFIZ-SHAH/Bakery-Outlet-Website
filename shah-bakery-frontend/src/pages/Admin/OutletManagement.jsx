import MainLayout from "../../layouts/MainLayout";
import OutletTable from "./OutletTable";

const OutletManagement = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-24 bg-[var(--cream)] min-h-screen">

        <div className="container-custom">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">

            <div>

              <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
                Admin Panel
              </p>

              <h1 className="serif text-6xl text-[var(--deepBrown)]">
                Outlet Management
              </h1>

              <p className="text-[#7f6a52] mt-4">
                Manage branches, availability and outlet information.
              </p>

            </div>

            <button className="bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white px-8 py-4 rounded-full uppercase tracking-[3px] text-sm">

              Add New Outlet

            </button>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">

            <div className="bg-white rounded-[30px] p-8 shadow-lg">

              <p className="uppercase tracking-[3px] text-xs text-[#7f6a52]">
                Total Outlets
              </p>

              <h2 className="serif text-5xl text-[var(--warmBrown)] mt-4">
                2
              </h2>

            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg">

              <p className="uppercase tracking-[3px] text-xs text-[#7f6a52]">
                Active
              </p>

              <h2 className="serif text-5xl text-green-600 mt-4">
                2
              </h2>

            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg">

              <p className="uppercase tracking-[3px] text-xs text-[#7f6a52]">
                Inactive
              </p>

              <h2 className="serif text-5xl text-red-500 mt-4">
                0
              </h2>

            </div>

          </div>

          <div className="bg-white rounded-[30px] p-6 shadow-lg mb-10">

            <input
              type="text"
              placeholder="Search outlet..."
              className="w-full border border-[#eee] rounded-full px-6 py-4 outline-none"
            />

          </div>

          <OutletTable />

        </div>

      </section>

    </MainLayout>
  );
};

export default OutletManagement;