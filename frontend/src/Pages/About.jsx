// Import the icon from lucide
import monique from "../assets/About_Images/monique1.png";
import nisha from "../assets/About_Images/nisha1.png";
import prakruti from "../assets/About_Images/prakruti1.png";
import sonam from "../assets/About_Images/sonam1.png";
import tara from "../assets/About_Images/tara1.png";

// Team members information: id, name and bio
const teamMembers = [
  {
    id: 1,
    initials: monique,
    name: "Monique",
    bio: "I am a Law and Healthcare graduate who has recently returned to the healthcare sector after working as a paralegal. I have always had an interest in technology and started to learn to code during maternity leave and I have enjoyed developing my technical skills.",
  },
  {
    id: 2,
    initials: nisha,
    name: "Nisha",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget semper elit.",
  },
  {
    id: 3,
    initials: prakruti,
    name: "Prakruti",
    bio: "Hi I am a Frontend Developer, Science graduate and mother of two sweethearts. Currently learning full stack with CFGDegree.",
  },
  {
    id: 4,
    initials: sonam,
    name: "Sonam",
    bio: "I'm a Frontend Developer who loves building modern, user-friendly web applications. I'm always curious to learn new technologies and sharpen my skills . Outside of coding, I'm a proud mom of two adorable boys who keep me on my toes and make life wonderfully busy.",
  },
  {
    id: 5,
    initials: tara,
    name: "Tara",
    bio: "I'm a Full Stack Developer with a degree in BSc Computing & IT and Business. I've been actively building my programming skills through a range of online courses to further strengthen my skills and gain practical experience.",
  },
];

const About = () => {
  return (
    // Page background
    <main className="bg-(--black) py-10 px-4 font-headings">
      {/* Page heading */}
      <div className="text-center mb-8">
        {/* Page title */}
        <h1 className="text-(--yellow) uppercase font-bold tracking-widest text-3xl mb-2">
          Meet the team
        </h1>

        {/* Page paragraph with description of the app */}
        <p className="text-(--gray) max-w-3xl mx-auto text-base">
          Code First Girls(CFG) Degree alumni who are passionate about
          development. We created this simple react web app to help others stay
          organised to track their job application progress.
        </p>
      </div>

      {/* Team members cards loop using teamMembers array and creates a card for each member */}
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member) => (
          // Team member cards with effect on hover
          <div
            key={member.id}
            className="bg-(--navy-blue) rounded-xl w-65 overflow-hidden hover:opacity-50 transition-opacity duration-300"
          >
            {/* Photo placeholder for each member using icon from lucide-react */}
            <div
              className="w-full h-30"
              style={{
                backgroundImage: `url(${member.initials})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>

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

      {/* Bottom tagline */}
      {/* <div className="bg-(--black) text-center py-6 border-t border-gray-800">
        <p className="text-(--yellow) font-bold text-xl">
          Start feeling at ease with JobEase
        </p>
      </div> */}
    </main>
  );
};

export default About;
