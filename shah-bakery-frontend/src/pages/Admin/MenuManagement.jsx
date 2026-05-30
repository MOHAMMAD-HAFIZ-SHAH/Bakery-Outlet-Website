import MainLayout from "../../layouts/MainLayout";
import MenuTable from "../../components/admin/MenuTable";
import AddProductModal from "../../components/admin/AddProductModal";

const MenuManagement = () => {
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
                Menu Management
              </h1>

            </div>

            <button className="bg-[var(--warmBrown)] hover:bg-[var(--deepBrown)] transition text-white px-8 py-4 rounded-full uppercase tracking-[3px] text-sm">

              Add New Product

            </button>

          </div>

          <div className="grid xl:grid-cols-[420px_1fr] gap-10">

            <div>

              <AddProductModal />

            </div>

            <div>

              <MenuTable />

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default MenuManagement;