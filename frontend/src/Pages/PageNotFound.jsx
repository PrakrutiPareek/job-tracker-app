import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-4 justify-center items-center bg-(--navy-blue) px-20 py-15 rounded-2xl">
        <h1 className="font-extrabold text-3xl bg-(--yellow) text-(--navy-blue) px-4 py-2 rounded-xl">
          404
        </h1>
        <p>Oops... Page not found..!</p>
        <Link
          to="/"
          className="px-2 py-1 bg-(--gray) text-(--navy-blue) rounded-xs font-bold"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
