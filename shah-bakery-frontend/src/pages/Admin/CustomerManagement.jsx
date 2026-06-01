import MainLayout from "../../layouts/MainLayout";
import CustomersTable from "../../components/admin/CustomersTable";

const CustomerManagement = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-24 bg-[var(--cream)] min-h-screen">

        <div className="container-custom">

          <div className="flex justify-between items-center mb-12">

            <div>

              <p className="uppercase tracking-[5px] text-[var(--gold)] text-sm mb-4">
                Admin Panel
              </p>

              <h1 className="serif text-6xl text-[var(--deepBrown)]">
                Customer Management
              </h1>

            </div>

          </div>

          <div className="bg-white rounded-[30px] p-6 shadow-lg mb-10">

            <input
              type="text"
              placeholder="Search customer..."
              className="w-full border border-[#eee] rounded-full px-6 py-4 outline-none"
            />

          </div>

          <CustomersTable />

        </div>

      </section>

    </MainLayout>
  );
};

export default CustomerManagement;