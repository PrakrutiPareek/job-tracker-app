import {useState} from "react";
import {Link} from "react-router-dom";
import {mockApplications} from "../Data/mockApplications";

import AppTableBody from "../Components/Applications/AppTableBody";
import AppTableHeads from "../Components/Applications/AppTableHeads";
import AppCardGrid from "../Components/Applications/AppCardGrid";
import ManualApplicationForm from "../Components/Applications/ManualApplicationForm";
import Pagination from "../Components/Pagination";
import EmptyAppState from "../Components/Applications/EmptyAppState";

const Applications = () => {
  //Mock jobs state
  const [jobs, setJobs] = useState(mockApplications);

  //Manual job entry form state
  const [showForm, setShowForm] = useState(false);

  //  Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentJobs = jobs.slice(startIndex, endIndex);

  const totalJobs = jobs.length;

  // handling status change
  const handleStatusChange = (id, updatedStatus) => {
    const updated = jobs.map((job) =>
      job.id === id ? {...job, status: updatedStatus} : job,
    );
    setJobs(updated);
  };

  //  appcards stat calculations
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
  const getPercentage = (statusCounts) => {
    if (totalJobs === 0) return 0;
    return Math.round((statusCounts / totalJobs) * 100);
  };

  //handling form submission
  const handleFormSubmit = () => console.log("Form is submitted");

  return (
    <main className="mt-7 mx-11.75 flex flex-col">
      <div className="flex justify-between items-center mb-10.5 text-(--yellow)">
        <div>
          <h1 className="text-[28px] font-bold font-headings">
            Application Tracker
          </h1>
          <p>Take control of your job search!</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-(--yellow) text-(--black) px-4 py-3 rounded-xl font-bold transition-transform active:scale-90 hover:scale-105 hover:text-(--white)"
        >
          + Add Application
        </button>
      </div>
      {/* Manual entry form */}
      <ManualApplicationForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleFormSubmit}
      />

      {/* Stat cards */}
      <AppCardGrid
        statusCounts={statusCounts}
        getPercentage={getPercentage}
        totalJobs={jobs.length}
      />

      {/* Empty states - when no jobs are available 
      =============OR===============
      Application Tracker table */}
      {totalJobs === 0 ? (
        <EmptyAppState />
      ) : (
        <div className="overflow-hidden rounded-xl mt-8">
          <table className="bg-(--navy-blue) w-full">
            <AppTableHeads />

            <AppTableBody
              jobs={currentJobs}
              onStatusChange={handleStatusChange}
            />
          </table>
        </div>
      )}

      {/*  Replace placeholder with actual Pagination */}
      {totalJobs > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </main>
  );
};

export default Applications;
