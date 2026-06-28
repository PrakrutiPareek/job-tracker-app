import AppCard from "./AppCard";

const AppCardGrid = ({statusCounts, getPercentage, totalJobs}) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <AppCard name="Total Jobs" statusCounts={totalJobs} />
      <AppCard
        name="Applied"
        statusCounts={statusCounts.Applied}
        percentage={getPercentage(statusCounts.Applied)}
      />
      <AppCard
        name="Interview"
        statusCounts={statusCounts.Interview}
        percentage={getPercentage(statusCounts.Interview)}
      />
      <AppCard
        name="Offer"
        statusCounts={statusCounts.Offer}
        percentage={getPercentage(statusCounts.Offer)}
      />
      <AppCard
        name="Rejected"
        statusCounts={statusCounts.Rejected}
        percentage={getPercentage(statusCounts.Rejected)}
      />
    </div>
  );
};

export default AppCardGrid;
