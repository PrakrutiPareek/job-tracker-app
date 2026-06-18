import {useState} from "react";
import {mockApplications} from "../Data/mockApplications";

import AppTableBody from "../Components/AppTableBody";
import AppTableHeads from "../Components/AppTableHeads";
import AppCardGrid from "../Components/AppCardGrid";

const Applications = () => {
  const [jobs, setJobs] = useState(mockApplications);

  const handleStatusChange = (id, updatedStatus) => {
    const updated = jobs.map((job) =>
      job.id === id ? {...job, status: updatedStatus} : job,
    );
    setJobs(updated);
  };

  const statusCounts = {
    Saved: 0,
    Applied: 0,
    Interview: 0,
    Offer: 0,
    Rejected: 0,
  };

  jobs.forEach((job) => {
    statusCounts[job.status]++;
  });

  const totalJobs = jobs.length;

  const getPercentage = (statusCounts) => {
    if (totalJobs === 0) return 0;
    return Math.round((statusCounts / totalJobs) * 100);
  };

  return (
    <main className="mt-7 mx-11.75">
      <div className="mb-10.5 text-(--yellow)">
        <h1 className="text-[28px] font-bold font-headings">Saved Jobs</h1>
        <p>Take control of your job search!</p>
      </div>

      <AppCardGrid statusCounts={statusCounts} getPercentage={getPercentage} />

      <div className="overflow-hidden rounded-xl mt-8">
        <table className="bg-(--navy-blue) w-full">
          <AppTableHeads />

          <AppTableBody jobs={jobs} onStatusChange={handleStatusChange} />
        </table>
      </div>

      <div className="mt-5 text-center">Pagination</div>
    </main>
  );
};

export default Applications;
