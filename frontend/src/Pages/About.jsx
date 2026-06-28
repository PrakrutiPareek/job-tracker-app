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
    bio: "I am a Support Account Manager at an enterprise software company focused on manufacturing solutions. I am learning to code so I can build my own applications.",
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
<<<<<<< HEAD
    <main className="h-full flex flex-col items-center justify-center bg-(--black) py-10 px-6 font-headings">
=======
    <main className="flex min-h-[calc(100vh-120px)] flex-col justify-center bg-(--black) py-6 px-4 font-headings">
>>>>>>> 5c89f94484e66fc61dd175c7736f748cc637b8b5
      {/* Page heading */}
      <div className="text-center mb-6">
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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2  sm:px-6 lg:grid-cols-5 lg:px-8">
        {teamMembers.map((member) => (
          // Team member cards with effect on hover
          <div
            key={member.id}
            className="w-full overflow-hidden rounded-xl bg-(--navy-blue) transition-opacity duration-300 hover:opacity-50"
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
              <h2 className="mb-2 text-base font-bold text-(--white)">
                {member.name}
              </h2>

              {/* Team member bio */}
              <p className="text-xs leading-relaxed text-(--gray)">
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
