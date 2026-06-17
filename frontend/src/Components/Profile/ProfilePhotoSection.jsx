import { FaUser } from "react-icons/fa";

export default function ProfilePhotoSection() {
  return (
    <>
      <h2 className="text-white text-2xl font-semibold mb-8">
        Profile Photo
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-[110px] h-[110px] rounded-full bg-[#D9D9D9] flex items-center justify-center">
          <FaUser className="text-[#111D49] text-2xl" />
        </div>

        <div className="flex flex-col">
          <button className="border border-[#5661FF] px-8 py-4 text-[#5661FF] font-semibold hover:bg-[#5661FF] hover:text-white transition">
            Upload Photo
          </button>

          <button className="mt-3 text-white">
            remove
          </button>
        </div>

        <div className="h-28 border-r border-gray-400"></div>

        <div className="text-white leading-8">
          <p className="mb-2">Image requirements:</p>
          <p>1. Min. 400 × 400px</p>
          <p>2. Max. 2MB</p>
          <p>3. Your face or company logo</p>
        </div>
      </div>

      <div className="border-b border-gray-500 my-5"></div>
    </>
  );
}