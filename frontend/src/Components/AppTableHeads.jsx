import {tableHeadings} from "../Data/applications_tableHeadings";

const AppTableHeads = () => {
  return tableHeadings.map((head) => {
    return (
      <th className="px-3 py-4 text-left bg-linear-120 from-(--navy-blue) to-gray-900">
        {head}
      </th>
    );
  });
};

export default AppTableHeads;
