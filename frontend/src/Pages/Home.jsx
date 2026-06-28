import {Link} from "react-router-dom";
import Button from "../Components/UI/Button";
import heroBackground from "../assets/images/hero-bg.jpg";

/*
 * Home Page
 *
 * Displays:
 * - Hero section
 * - Call-to-action
 */

const Home = () => {
  return (
<<<<<<< HEAD
    //Hero section
    <section
      className="relative flex h-full items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-3xl px-6 text-center">
        <h1 className="mb-8 font-headings text-4xl font-bold text-(--yellow) md:text-5xl">
          Job Application Tracker
        </h1>
=======
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[68vh] items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-3xl px-6 text-center">
          <h1 className="mb-6 font-headings text-4xl font-bold text-(--yellow) md:text-5xl">
            Job Application Tracker
          </h1>
>>>>>>> 5c89f94484e66fc61dd175c7736f748cc637b8b5

        <p className="mx-auto max-w-2xl font-main text-lg leading-relaxed text-gray-200 md:text-xl">
          Job interviews can be nerve-racking. Stay organised and keep track of
          your applications with JobEase.
        </p>

<<<<<<< HEAD
        <Link
          to="/signup"
          aria-label="Create a JobEase account"
          className="mt-10 inline-block"
        >
          <Button variant="primary">REGISTER</Button>
        </Link>
      </div>
    </section>
=======
          <Link
            to="/signup"
            aria-label="Create a JobEase account"
            className="mt-8 inline-block"
          >
            <Button variant="primary">REGISTER</Button>
          </Link>
        </div>
      </section>

      <CallToAction />
    </>
>>>>>>> 5c89f94484e66fc61dd175c7736f748cc637b8b5
  );
};

export default Home;
