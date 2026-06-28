export default function ExperienceSelect({value, onChange, error}) {
  return (
    <div className="mt-4 px-12">
      <label
        htmlFor="experience"
        className="block text-(--yellow) mb-3 text-md font-semibold"
      >
        Experience Level
      </label>
      <select
        id="experience"
        name="experience"
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        className="w-full p-2 bg-[#E5E5E5] text-(--black) outline-none text-lg [&>option]:bg-(--black) [&>option]:text-(--white)"
      >
        <option aria-label="Select experience level">
          Enter total experience in years
        </option>

        <option value="0-1 Years">0-1 Years</option>
        <option value="1-3 Years">1-3 Years</option>
        <option value="3-5 Years">3-5 Years</option>
        <option value="5-8 Years">5-8 Years</option>
        <option value="8+ Years">8+ Years</option>
      </select>

      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  );
}
