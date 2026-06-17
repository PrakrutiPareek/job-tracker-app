import AppCards from "../Components/AppCards";
import AppTableBody from "../Components/AppTableBody";
import AppTableHeads from "../Components/AppTableHeads";

const Applications = () => {
  return (
    <main className="mt-7 mx-11.75">
      <div className="flex justify-between mb-10.5">
        <div className="text-(--yellow)">
          <h1 className="text-[28px] font-bold font-headings">Applications</h1>
          <p>Take control of your job applications!</p>
        </div>
        <div>
          <input type="text" placeholder="Search for..." />
        </div>
      </div>

      <AppCards />

      <div className="overflow-hidden rounded-xl mt-8">
        <table className="bg-(--navy-blue) w-full">
          <thead>
            <tr className="px-3 py-4">
              <AppTableHeads />
            </tr>
          </thead>
          <tbody>
            <AppTableBody />
          </tbody>
        </table>
      </div>

      <div className="mt-5 text-center">Pagination</div>
    </main>
  );
};

export default Applications;
