import MainLayout from "../../layouts/MainLayout";
import OrdersTable from "./OrdersTable";

const OrderManagement = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-24">

        <div className="container-custom">

          <h1 className="serif text-6xl text-[var(--deepBrown)] mb-12">
            Order Management
          </h1>

          <OrdersTable />

        </div>

      </section>

    </MainLayout>
  );
};

export default OrderManagement;