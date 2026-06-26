import {Trash2} from "lucide-react";

const AppTableBody = ({jobs, onStatusChange, onDelete}) => {
  return (
    <tbody>
      {jobs.map((job, index) => (
        <tr key={job.id} className="[&>td]:px-3 [&>td]:py-4">
          <td>{index + 1}</td>
          <td className="max-w-40 truncate text-nowrap">{job.jobRole}</td>
          <td className="max-w-40 truncate text-nowrap">{job.company}</td>
          {/* <td>{new Date(job.createdAt).toLocaleDateString("en-GB")}</td> */}
          <td className="max-w-40 truncate text-nowrap">{job.location}</td>
          <td>
            <select
              value={job.status}
              onChange={(e) => {
                return onStatusChange(job.id, e.target.value);
              }}
              className="[&>option]:bg-(--black) [&>option]:text-(--yellow)"
            >
              <option value="">Select Status</option>
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
              <option value="">Select Source</option>
              <option value="Adzuna">Adzuna</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Indeed">Indeed</option>
              <option value="CV-Library">CV-Library</option>
              <option value="Company-site">Company-site</option>
              <option value="Other">Other</option>
            </select>
          </td>
          <td data-label="URL">
            {job.url ? (
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-(--gray) px-2 py-1 text-(--navy-blue) rounded-xl cursor-pointer hover:-translate-y-0.5"
              >
                URL
              </a>
            ) : (
              <span className="text-gray-400">—</span>
            )}
          </td>
          <td>
            <input type="textarea" placeholder="Notes.." />
          </td>
          <td>
            <button onClick={() => onDelete(job.id)}>
              <Trash2 size={20} />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AppTableBody;
