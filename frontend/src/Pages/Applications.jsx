const Applications = () => {
  const tableHeadings = [
    "",
    "Job Role",
    "Company",
    "Date",
    "Status",
    "Location",
    "Link",
    "",
  ];
  const mockApplications = [
    {
      id: 1,
      jobrole: "Full stack developer",
      Company: "Spotify",
      Date: "13/06/2026",
      Status: "Interview",
      Location: "Remote",
      Link: "link",
    },
    {
      id: 2,
      jobrole: "Full stack developer",
      Company: "Spotify",
      Date: "13/06/2026",
      Status: "Interview",
      Location: "Remote",
      Link: "link",
    },
    {
      id: 3,
      jobrole: "Full stack developer",
      Company: "Spotify",
      Date: "13/06/2026",
      Status: "Interview",
      Location: "Remote",
      Link: "link",
    },
    {
      id: 4,
      jobrole: "Full stack developer",
      Company: "Spotify",
      Date: "13/06/2026",
      Status: "Interview",
      Location: "Remote",
      Link: "link",
    },
    {
      id: 5,
      jobrole: "Full stack developer",
      Company: "Spotify",
      Date: "13/06/2026",
      Status: "Interview",
      Location: "Remote",
      Link: "link",
    },
    {
      id: 6,
      jobrole: "Full stack developer",
      Company: "Spotify",
      Date: "13/06/2026",
      Status: "Interview",
      Location: "Remote",
      Link: "link",
    },
  ];
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

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-(--navy-blue) p-4 rounded-xl">
          <h2 className="font-semibold text-[16px]">Applied</h2>
          <div className="flex justify-between items-center text-2xl">
            15
            <span className="text-[14px] bg-(--gray) text-(--navy-blue) px-3 py-1 rounded-xl">
              40%
            </span>
          </div>
        </div>
        <div className="bg-(--navy-blue) p-4 rounded-xl">
          <h2 className="font-semibold text-[16px]">Interview</h2>
          <div className="flex justify-between items-center text-2xl">
            4
            <span className="text-[14px] bg-(--gray) text-(--navy-blue) px-3 py-1 rounded-xl">
              4%
            </span>
          </div>
        </div>
        <div className="bg-(--navy-blue) p-4 rounded-xl">
          <h2 className="font-semibold text-[16px]">Offer</h2>
          <div className="flex justify-between items-center text-2xl">
            3
            <span className="text-[14px] bg-(--gray) text-(--navy-blue) px-3 py-1 rounded-xl">
              3%
            </span>
          </div>
        </div>
        <div className="bg-(--navy-blue) p-4 rounded-xl">
          <h2 className="font-semibold text-[16px]">Rejected</h2>
          <div className="flex justify-between items-center text-2xl">
            1
            <span className="text-[14px] bg-(--gray) text-(--navy-blue) px-3 py-1 rounded-xl">
              1%
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl mt-8">
        <table className="bg-(--navy-blue) w-full">
          <thead>
            <tr className="px-3 py-4">
              {tableHeadings.map((head) => {
                return (
                  <th className="px-3 py-4 text-left bg-linear-120 from-(--navy-blue) to-gray-900">
                    {head}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {mockApplications.map((app) => {
              return (
                <tr key={app.id} className="[&>td]:px-3 [&>td]:py-4">
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>{app.jobrole}</td>
                  <td>{app.Company}</td>
                  <td>{app.Date}</td>
                  <td>{app.Status}</td>
                  <td>{app.Location}</td>
                  <td>{app.Link}</td>
                  <td>...</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-5 text-center">Pagination</div>
    </main>
  );
};

export default Applications;
