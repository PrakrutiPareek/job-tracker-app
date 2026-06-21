import {useState} from "react";
import {Link} from "react-router-dom";
import {mockApplications} from "../Data/mockApplications";

import AppTableBody from "../Components/Applications/AppTableBody";
import AppTableHeads from "../Components/Applications/AppTableHeads";
import AppCardGrid from "../Components/Applications/AppCardGrid";
import ManualApplicationForm from "../Components/Applications/ManualApplicationForm";

const Applications = () => {
  const [jobs, setJobs] = useState(mockApplications);
  const [showForm, setShowForm] = useState(false);

  const statusCounts = {
    Saved: 0,
    Applied: 0,
    Interview: 0,
    Offer: 0,
    Rejected: 0,
  };

  const totalJobs = jobs.length;

  const handleStatusChange = (id, updatedStatus) => {
    const updated = jobs.map((job) =>
      job.id === id ? {...job, status: updatedStatus} : job,
    );
    setJobs(updated);
  };

  jobs.forEach((job) => {
    statusCounts[job.status]++;
  });

  const getPercentage = (statusCounts) => {
    if (totalJobs === 0) return 0;
    return Math.round((statusCounts / totalJobs) * 100);
  };

  const handleFormSubmit = () => console.log("Form is submitted");

  return (
    <main className="mt-7 mx-11.75">
      <div className="flex justify-between items-center mb-10.5 text-(--yellow)">
        <div>
          <h1 className="text-[28px] font-bold font-headings">
            Application Tracker
          </h1>
          <p>Take control of your job search!</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-(--yellow) text-(--black) px-4 py-3 rounded-xl font-bold transition-transform active:scale-90"
        >
          + Add Application
        </button>
      </div>
      <ManualApplicationForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleFormSubmit}
      />

      <AppCardGrid
        statusCounts={statusCounts}
        getPercentage={getPercentage}
        totalJobs={jobs.length}
      />

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
