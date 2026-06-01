import MainLayout from "../../layouts/MainLayout";
import AnalyticsChart from "../../components/admin/AnalyticsChart";

const Analytics = () => {
  return (
    <MainLayout>

      <section className="pt-[140px] pb-24">

        <div className="container-custom">

          <h1 className="serif text-6xl text-[var(--deepBrown)] mb-12">
            Analytics
          </h1>

          <AnalyticsChart />

        </div>

      </section>

    </MainLayout>
  );
};

export default Analytics;