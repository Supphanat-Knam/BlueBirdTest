import { SiUnocss } from "react-icons/si";
import { FaCodeBranch } from "react-icons/fa6";
import { SiJfrogpipelines } from "react-icons/si";
import useScrollObserver from "../../utils/scrollAnimation";

// ข้อมูลจำลอง JSON
const techStackData = [
  {
    icon: SiUnocss,
    title: "Frontend & Mobile",
    description:
      "Angular, React.js, JavaScript, TypeScript, Vue.js, Unity WebGL, Next.js, Android studio, Cordova, Xamarin",
  },
  {
    icon: FaCodeBranch,
    title: "Backend",
    description: "GO, Node.js, Python, Spring boot",
  },
  {
    icon: SiJfrogpipelines,
    title: "DevOps & Infrastructure",
    description:
      "aws, Google Cloud, Azure, Huawei Cloud, Kubernetes, Docker, argo, databricks, gRPC, Quic, Grafana, Jira, Confluence",
  },
];

const TechStack = () => {
  useScrollObserver({
    selector: ".fade-in",
    className: "show",
    visibilityThreshold: 0.8,
  });

  useScrollObserver({
    selector: ".scale-up",
    className: "show",
    visibilityThreshold: 0.8,
  });
  return (
    <div className="bg-[#1C1C47] *:text-white">
      <div className="container px-6 py-5 mx-auto lg:py-20 lg:px-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] fade-in">
            Tech Stacks
          </h1>
          <p className="text-sm text-[#9CA4A9] mt-5 fade-in">
            "Our advanced tech stack reflects our dedication to innovation and
            <br />
            efficiency—empowering your business with scalable, future-ready
            solutions."
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-around mt-10 gap-6 lg:gap-0">
          {techStackData.map((tech, index) => (
            <div
              key={index}
              className="flex justify-center p-4 transition-shadow duration-700 ease-in-out hover:shadow-sm w-96 hover:shadow-white scale-up"
            >
              <div className="text-5xl pe-3">
                <tech.icon />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{tech.title}</h3>
                <p className="text-sm text-[#9CA4A9] mt-1">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
