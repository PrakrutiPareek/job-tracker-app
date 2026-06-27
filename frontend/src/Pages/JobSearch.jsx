import {useState} from "react";
import SearchBar from "../components/UI/SearchBar";
import JobCard from "../components/JobCard";
import {fetchJobListings} from "../api/adzunaApi";
import ErrorMessage from "../Components/UI/ErrorMessage";
import handleApiError from "../utils/handleApiError";
import apiRequest from "../utils/apiRequest";

const JobSearch = () => {
  // State variable to store the job search keyword, location entered by the user
  const [keyword, setKeyword] = useState("");

  const [location, setLocation] = useState("");

  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle search function
  const handleSearch = async () => {
    if (!keyword.trim() && !location.trim()) {
      setJobs([]);
      setError("Please enter a keyword or location to search.");
      return;
    }
    try {
      setLoading(true);
      setError("");
      // Fetch job listings from the backend API based on the provided keyword and location
      const result = await apiRequest(() =>
        fetchJobListings(keyword, location),
      );
      setJobs(Array.isArray(result) ? result : result.results || []);
    } catch (error) {
      setJobs([]);
      setError(handleApiError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <main className="flex-1 p-10">
        <h1 className="text-[28px] font-bold font-headings text-(--yellow) mb-10 self-start">
          Job Search
        </h1>
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-center text-[22px] font-extrabold mb-8">
            Start Your Job Search
          </h2>
          <SearchBar
            keyword={keyword}
            location={location}
            setKeyword={setKeyword}
            setLocation={setLocation}
            onSearch={handleSearch}
          />

          <div className="bg-(--navy-blue) mt-8 rounded-xl p-4">
            <h3 className="text-[20px] font-bold mb-4">Available Jobs</h3>
            <div className="max-h-150 overflow-y-auto pr-1">
              <ErrorMessage message={error} />
              {loading && <p>Loading...</p>}
              {!jobs.length ? (
                <p className="text-center text-[16px]">
                  No jobs found matching your criteria.
                </p>
              ) : (
                jobs.map((job) => <JobCard key={job.id} job={job} />)
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobSearch;
