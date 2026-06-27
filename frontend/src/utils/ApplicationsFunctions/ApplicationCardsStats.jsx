const ApplicationCardsStats = (savedJobs) => {
  const totalJobs = savedJobs.length;

  const statusCounts = {
    Saved: 0,
    Applied: 0,
    Interview: 0,
    Offer: 0,
    Rejected: 0,
  };

  savedJobs.forEach((job) => {
    if (statusCounts[job.status] !== undefined) {
      statusCounts[job.status]++;
    }
  });

  const getPercentage = (statusCounts) => {
    if (totalJobs === 0) return 0;
    return Math.round((statusCounts / totalJobs) * 100);
  };

  return {totalJobs, statusCounts, getPercentage};
};

export default ApplicationCardsStats;
