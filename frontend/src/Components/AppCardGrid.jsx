import AppCard from "./AppCard";

const AppCardGrid = ({statusCounts, getPercentage}) => {
  return (
    <div className="grid grid-cols-5 gap-6">
      <AppCard
        name="Saved"
        statusCounts={statusCounts.Saved}
        percentage={getPercentage(statusCounts.Saved)}
      />
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
