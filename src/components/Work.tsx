import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    name: "TL-SOD",
    category: "Sod Delivery Platform",
    tools: "React, Node.js, Azure, Socket.IO, Square API, OpenAI, TensorFlow.js, JWT",
    image: "/images/tl-sod.png",
    link: "https://app.tlsodcompany.com",
  },
  {
    name: "Creator Niche",
    category: "Content Creator Platform",
    tools: "Next.js, React, Node.js, Express, PostgreSQL, Stripe, WebSockets, Chart.js",
    image: "/images/creator-niche.png",
    link: "https://creatorniche.enteraxion.com",
  },
  {
    name: "Opposite",
    category: "Dating App",
    tools: "React Native, Node.js, Express, MongoDB, Socket.IO, JWT, Firebase, AWS S3",
    image: "/images/opposite.png",
    link: "https://opposites.enteraxion.com",
  },
  {
    name: "RythmaAI",
    category: "AI Music Platform",
    tools: "React, Node.js, OpenAI API, Python, TensorFlow, PostgreSQL, WebSockets, AWS",
    image: "/images/rhythmai.png",
    link: "https://rhythmai.replit.app/",
  },
  {
    name: "Daedalus Cybernetics",
    category: "Corporate Web Platform",
    tools: "React, Next.js, Node.js, TypeScript, Tailwind CSS, AWS, Vercel",
    image: "/images/daedalus.png",
    link: "https://daedalus-cybernetics.replit.app",
  },
];

const Work = () => {
  return (
    <div className="work-section section-container" id="work">
      <h2>
        My <span>Work</span>
      </h2>
      <div className="work-list">
        {projects.map((project, index) => (
          <div className="work-item" key={index}>
            <div className="work-item-left">
              <span className="work-num">0{index + 1}</span>
              <div className="work-item-info">
                <h4>{project.name}</h4>
                <p className="work-category">{project.category}</p>
                <p className="work-tools">{project.tools}</p>
              </div>
            </div>
            <div className="work-item-image">
              <WorkImage image={project.image} alt={project.name} link={project.link || undefined} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
