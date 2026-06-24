// Team members information: id, name and bio
const teamMembers = [
  {
    id: 1,
    name: "Monique",
    initials: "MK",
    bio: "Hi, I am Monique and I started learning to code during maternity leave this motivated me to apply to CFG",
  },
  {
    id: 2,
    name: "Nisha",
    initials: "NR",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget semper elit.",
  },
  {
    id: 3,
    name: "Prakruti",
    initials: "PP",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget semper elit.",
  },
  {
    id: 4,
    name: "Sonam",
    initials: "SJ",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget semper elit.",
  },
  {
    id: 5,
    name: "Tara",
    initials: "TO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget semper elit.",
  },
];

const About = () => {
  return (
    // Page background
    <main className="min-h-screen bg-(--black) py-16 px-4">
      {/* Page heading */}
      <div className="text-center mb-12">
        {/* Page title */}
        <h1 className="font-headings text-(--yellow) uppercase font-bold tracking-widest text-3xl mb-4">
          {" "}
          Meet the team
        </h1>

        {/* Page paragraph with description of the app */}
        <p className="text-(--gray) max-w-2xl mx-auto text-base">
          Code First Girls(CFG) Degree alumni who are passionate about
          development. We created this simple react web app to help others stay
          organised to track their job application progress.
        </p>
      </div>

      {/* Team members cards loop using teamMembers array and creates a card for each member */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {teamMembers.map((member) => (
          // Team member cards with effect on hover
          <div
            key={member.id}
            className="bg-(--navy-blue) rounded-xl w-48 overflow-hidden hover:opacity-50 transition-opacity duration-300"
          >
            {/* Photo placeholder for each member using icon from lucide-react */}
            <div className="w-full h-36 bg-gray-500 flex items-center justify-center">
              <div className="text-white text-4xl font-bold font-headings">
                {member.initials}
              </div>
            </div>

            {/* Card information */}
            <div className="p-4">
              {/* Team members name */}
              <h2 className="text-(--white) font-bold text-base mb-2">
                {member.name}
              </h2>

              {/* Team member bio */}
              <p className="text-(--gray) text-xs leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;
