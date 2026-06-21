import {useState} from "react";
import {Link} from "react-router-dom";
import {mockApplications} from "../Data/mockApplications";

import AppTableBody from "../Components/AppTableBody";
import AppTableHeads from "../Components/AppTableHeads";
import AppCardGrid from "../Components/AppCardGrid";
import Pagination from "../Components/Pagination"; //    

const Applications = () => {
  const [jobs, setJobs] = useState(mockApplications);

  const handleStatusChange = (id, updatedStatus) => {
    const updated = jobs.map((job) =>
      job.id === id ? { ...job, status: updatedStatus } : job
    );
    setJobs(updated);
  };

  //  Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentJobs = jobs.slice(startIndex, endIndex);

  //  stats (unchanged logic)
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

  const getPercentage = (count) => {
    if (totalJobs === 0) return 0;
    return Math.round((count / totalJobs) * 100);
  };

  return (
    <main className="mt-7 mx-11.75">
      <div className="flex justify-between items-center mb-10.5 text-(--yellow)">
        <div>
          <h1 className="text-[28px] font-bold font-headings">
            Application Tracker
          </h1>
          <p>Take control of your job search!</p>
        </div>
        <Link
          to={"/profile/jobsearch"}
          className="bg-(--yellow) text-(--black) px-4 py-3 rounded-xl font-bold transition-transform active:scale-90"
        >
          + Add Application
        </Link>

      <AppCardGrid
        statusCounts={statusCounts}
        getPercentage={getPercentage}
      />

      <div className="overflow-hidden rounded-xl mt-8">
        <table className="bg-(--navy-blue) w-full">
          <AppTableHeads />

          {/*   use paginated jobs */}
          <AppTableBody
            jobs={currentJobs}
            onStatusChange={handleStatusChange}
          />
        </table>
      </div>

      {/*  Replace placeholder with actual Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
};

export default Applications;