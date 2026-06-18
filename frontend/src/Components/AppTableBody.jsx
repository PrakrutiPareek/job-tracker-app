import {PenBox} from "lucide-react";

const AppTableBody = ({jobs, onStatusChange}) => {
  return (
    <tbody>
      {jobs.map((job) => (
        <tr key={job.id} className="[&>td]:px-3 [&>td]:py-4">
          <td>{job.id}</td>
          <td>{job.jobrole}</td>
          <td>{job.Company}</td>
          <td>{job.Date}</td>
          <td>
            <select
              value={job.status}
              onChange={(e) => {
                return onStatusChange(job.id, e.target.value);
              }}
            >
              <option value="Saved">Saved</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </td>
          <td>{job.Location}</td>
          <td>
            <input type="textarea" placeholder="Notes.." />
          </td>
          <td>
            <PenBox size={10} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AppTableBody;
