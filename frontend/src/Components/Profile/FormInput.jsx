export default function FormInput({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
  error,
  icon: Icon,
}) {
  return (
    <div className="mt-4 px-12">
      <label className="block text-(--yellow) mb-3 text-md font-semibold">
        {label}
      </label>
    <div className="relative">
        {Icon && (
          <Icon
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
      )}
       <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`w-full rounded-lg border py-2 ${
            Icon ? "pl-10 pr-3" : "px-3"
          } ${
            error
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
      </div>
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  );
  
}
