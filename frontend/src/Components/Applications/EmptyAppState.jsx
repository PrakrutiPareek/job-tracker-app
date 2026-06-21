import {Link} from "react-router-dom";

const EmptyAppState = () => {
  return (
    <div className="flex flex-col gap-4 items-center bg-(--navy-blue) w-full rounded-xl mt-8 p-8 text-center">
      <h2 className="text-(--yellow) font-extrabold text-3xl">
        No saved jobs yet...
      </h2>
      <p className="text-lg">
        Starting saving your jobs today in our tracker. <br />
        You can search new opportunities using our platform or add manual
        entries of the jobs you applied elsewhere.
      </p>
      <Link
        to="/profile/jobsearch"
        aria-label="Jobsearch"
        className="bg-(--white) text-(--navy-blue) px-4 py-3 rounded-xl font-bold transition-transform active:scale-90 hover:scale-105 hover:text-(--yellow)"
      >
        Job Search
      </Link>
    </div>
  );
};

export default EmptyAppState;
