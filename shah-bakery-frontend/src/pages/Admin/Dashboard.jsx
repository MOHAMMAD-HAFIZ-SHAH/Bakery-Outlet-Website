import MainLayout from "../../layouts/MainLayout";
import DashboardCards from "./DashboardCards";

const Dashboard = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-24">

        <div className="container-custom">

          <h1 className="serif text-6xl text-[var(--deepBrown)] mb-12">
            Admin Dashboard
          </h1>

          <DashboardCards />

        </div>

      </section>

    </MainLayout>
  );
};

export default Dashboard;