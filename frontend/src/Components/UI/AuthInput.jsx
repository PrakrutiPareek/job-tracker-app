function AuthInput({label, type, value, onChange}) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-(--yellow)">{label}</label>
      <input
        type={type}
        className="w-full p-3 rounded bg-(--gray) text-black text-2xl"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default AuthInput;
