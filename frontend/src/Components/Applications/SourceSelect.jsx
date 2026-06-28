const SourceSelect = ({value, onChange, error}) => {
  return (
    <div className="mt-2 px-4 sm:px-6">
      <label
        htmlFor="source"
        className="block text-(--yellow) mb-3 text-md font-semibold"
      >
        Source
      </label>

      <select
        id="source"
        name="source"
        value={value}
        onChange={onChange}
        className={`w-full border rounded-md p-2 mb-3 ${error ? "border-red-500" : "border-(--yellow)"} [&>option]:text-(--black)`}
      >
        <option value="">Select Source</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="Indeed">Indeed</option>
        <option value="CV-Library">CV-Library</option>
        <option value="Company-site">Company-site</option>
        <option value="Other">Other</option>
      </select>
      {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}
    </div>
  );
};

export default SourceSelect;
