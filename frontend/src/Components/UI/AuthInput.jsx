function AuthInput({ label, type, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-yellow-500">{label}</label>
      <input
        type={type}
        className="w-full p-2 rounded bg-gray-200 text-black"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default AuthInput;