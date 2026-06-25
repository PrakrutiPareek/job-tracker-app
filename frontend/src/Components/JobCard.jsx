// JobCard component displays individual job listings with company name, job title, location, and action buttons for saving or applying to the job.
import savedJobsApi from "../api/savedjobsApi";
const JobCard = ({ job }) => {
  const { company, title, location, redirect_url } = job; // Destructure job which is passed as a prop to the JobCard component and job is coming from the parent component JobList.jsx.
  // The job object contains details about a specific job listing, including the company name, job title, location, and a URL for applying to the job.

  const handleSavedJob = async () => {

    const jobDataToSave = {
      jobId: job.id,
      title: job.title,
      company: job.company?.display_name,
      location: job.location?.display_name,
      salary: job.salary_min ? `${job.salary_min} - ${job.salary_max}` : "Not specified",
      url: job.redirect_url,
    };
    try {
      await savedJobsApi(jobDataToSave);
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  return (
    <div
      className="rounded-xl border border-slate-700 p-5 shadow-sm
      transition-transform hover:-translate-y-1"
    >
      <span
        className="rounded-full bg-(--navy-blue) px-3 py-1 text-sm
        font-medium text-(--navy-blue)"
      >
        {company.display_name}
      </span>

      <h3 className="mt-3 text-xl font-bold text-(--white)">{title}</h3>

      <p className="mt-2 text-slate-400">📍 {location.display_name}</p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-(--gray)">Remote Friendly</span>

        <div className="flex gap-3">
          <button
            className="rounded-lg bg-(--yellow) px-4 py-2 text-sm
                font-semibold text-(--black)" onClick = {handleSavedJob}
          >
            Save
          </button>

          <a href={redirect_url} target="_blank" rel="noreferrer">
            <button
              className="rounded-lg border text-(--black) px-4 py-2
              text-sm  bg-(--white) font-medium hover:bg-(--gray) hover:text-(--black) transition"
            >
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
