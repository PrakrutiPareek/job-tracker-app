export default function ManualApplicationFormInput({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="mt-2 px-10">
      <label className="block text-(--yellow) mb-3 text-md font-semibold">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-2 bg-(--gray)\ text-black outline-none text-lg ${
          error ? "border border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  );
}
