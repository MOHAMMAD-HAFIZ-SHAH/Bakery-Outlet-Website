const AnalyticsChart = () => {
  return (
    <div className="bg-white rounded-[35px] p-10 shadow-lg">

      <h2 className="serif text-4xl text-[var(--deepBrown)] mb-10">
        Sales Overview
      </h2>

      <div className="h-[350px] flex items-end gap-6">

        <div className="bg-[var(--gold)] w-16 h-[120px] rounded-t-lg"></div>

        <div className="bg-[var(--gold)] w-16 h-[200px] rounded-t-lg"></div>

        <div className="bg-[var(--gold)] w-16 h-[260px] rounded-t-lg"></div>

        <div className="bg-[var(--gold)] w-16 h-[180px] rounded-t-lg"></div>

        <div className="bg-[var(--gold)] w-16 h-[300px] rounded-t-lg"></div>

      </div>

    </div>
  );
};

export default AnalyticsChart;