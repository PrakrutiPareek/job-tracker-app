export default function ExperienceSelect({ value, onChange, error }) {
  return (
    < >
      <label className="block text-[#FFD58A] mb-3 text-md font-semibold">
        Experience Level
      </label>
      <select
        name="experience"
        value={value}
        onChange={(e)=>{
          console.log("Experience Changed", e.target.value);
          onChange(e);
        }}
        className="w-full p-2 bg-[#E5E5E5] text-black outline-none text-lg"
      >
        <option value="">Enter total experience in years</option>

        <option value="0-1 Years">0-1 Years</option>
        <option value="1-3 Years">1-3 Years</option>
        <option value="3-5 Years">3-5 Years</option>
        <option value="5-8 Years">5-8 Years</option>
        <option value="8+ Years">8+ Years</option>
      </select>

      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </>
  );
}
