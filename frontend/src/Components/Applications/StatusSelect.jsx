const StatusSelect = ({value, onChange}) => {
  return (
    <div className="mt-2 px-10">
      <label
        htmlFor="status"
        className="block text-(--yellow) mb-3 text-md font-semibold"
      >
        Status
      </label>

      <select
        id="status"
        name="status"
        value={value}
        onChange={onChange}
        className={`w-full border rounded-md p-2 mb-3 border-(--yellow) [&>option]:text-(--black)`}
      >
        <option value="">Select Status</option>
        <option value="Saved">Saved</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default StatusSelect;
