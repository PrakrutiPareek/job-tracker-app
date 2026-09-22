import {useState, useEffect} from "react";
import AppTableBody from "../Components/Applications/AppTableBody";
import AppTableHeads from "../Components/Applications/AppTableHeads";
import AppCardGrid from "../Components/Applications/AppCardGrid";
import ManualApplicationForm from "../Components/Applications/ManualApplicationForm";
import Pagination from "../Components/Applications/Pagination";
import EmptyAppState from "../Components/Applications/EmptyAppState";
import {getsavedJobs} from "../api/savedJobsApi";
import {toast} from "react-toastify";
import handleDeleteJob from "../utils/ApplicationsFunctions/handleDeleteJob";
import ApplicationCardsStats from "../utils/ApplicationsFunctions/ApplicationCardsStats";
import Button from "../Components/UI/Button";

const Applications = () => {
  //fetching saved jobs from database
  const [savedJobs, setSavedJobs] = useState([]);

  const fetchSavedJobs = async () => {
    try {
      const data = await getsavedJobs();
      setSavedJobs(data);
    } catch {
      toast.error("Error fetching saved jobs");
    }
  };

  useEffect(() => {
    const loadSavedJobs = async () => {
      try {
        const data = await getsavedJobs();
        setSavedJobs(data);
      } catch {
        toast.error("Error fetching saved jobs:");
      }
    };
    loadSavedJobs();
  }, []);

  //handle delete job from tracker
  const handleDelete = async (id) => {
    await handleDeleteJob(id, setSavedJobs);
  };

  //Manual job entry form state
  const [showForm, setShowForm] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(savedJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentJobs = savedJobs.slice(startIndex, endIndex);

  // handling status change
  const handleStatusChange = (id, updatedStatus) => {
    const updated = savedJobs.map((job) =>
      job.id === id ? {...job, status: updatedStatus} : job,
    );
    setSavedJobs(updated);
  };

  //  appcards stat calculations
  const {totalJobs, statusCounts, getPercentage} =
    ApplicationCardsStats(savedJobs);

  return (
    <main className="mt-10 px-4 sm:px-6 lg:px-12 flex flex-col pb-12">
      <div className="mb-6 flex flex-col justify-between items-center gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-[28px] font-bold font-headings text-(--yellow)">
            Applications
          </h1>
          <p>Take control of your job search!</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(true)}>
          + Add Application
        </Button>
      </div>
      {/* Manual entry form */}
      <ManualApplicationForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onJobSave={fetchSavedJobs}
      />

      {/* Stat cards */}
      <AppCardGrid
        statusCounts={statusCounts}
        getPercentage={getPercentage}
        totalJobs={totalJobs}
      />

      {/* Empty states - when no jobs are available OR Application Tracker table */}
      {totalJobs === 0 ? (
        <EmptyAppState />
      ) : (
        <div className="overflow-x-auto rounded-xl mt-8">
          <table className="bg-(--navy-blue) w-full min-w-225">
            <AppTableHeads />

            <AppTableBody
              jobs={currentJobs}
              startIndex={startIndex}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />
          </table>
        </div>
      )}

      {/* Pagination */}
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

//notes for instructors: To Do: For this file I have to use custom hooks for decreasing the code lines under 100, which I am not confident right now. -Prakruti Pareek
