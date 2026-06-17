import {mockApplications} from "../Data/mockApplications";
import {PenBox} from "lucide-react";

const AppTableBody = () => {
  return mockApplications.map((app) => {
    return (
      <tr key={app.id} className="[&>td]:px-3 [&>td]:py-4">
        <td>{app.id}</td>
        <td>{app.jobrole}</td>
        <td>{app.Company}</td>
        <td>{app.Date}</td>
        <td>
          <select>
            <option>Apply</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </td>
        <td>{app.Location}</td>
        <td>
          <input type="textarea" placeholder="Notes.." />
        </td>
        <td>
          <PenBox size={10} />
        </td>
      </tr>
    );
  });
};

export default AppTableBody;
