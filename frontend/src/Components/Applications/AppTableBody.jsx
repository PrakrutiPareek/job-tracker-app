import {PenBox, Trash2} from "lucide-react";

const AppTableBody = ({jobs, onStatusChange}) => {
  return (
    <tbody>
      {jobs.map((job) => (
        <tr key={job.id} className="[&>td]:px-3 [&>td]:py-4">
          <td>{job.id}</td>
          <td>{job.jobRole}</td>
          <td>{job.company}</td>
          <td>{job.date}</td>
          <td>{job.location}</td>
          <td>
            <select
              value={job.status}
              onChange={(e) => {
                return onStatusChange(job.id, e.target.value);
              }}
              className="[&>option]:bg-(--black) [&>option]:text-(--yellow)"
            >
              <option value="Saved">Saved</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </td>

          <td>
            <select
              value={job.source}
              onChange={(e) => {
                return onStatusChange(job.id, e.target.value);
              }}
              className="[&>option]:bg-(--black) [&>option]:text-(--yellow)"
            >
              <option value="Adzuna">Adzuna</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Indeed">Indeed</option>
              <option value="CV-Library">CV-Library</option>
              <option value="Company-site">Company-site</option>
              <option value="Other">Other</option>
            </select>
          </td>
          <td>
            <input type="textarea" placeholder="Notes.." />
          </td>
          <td>
            <Trash2 size={20} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AppTableBody;
