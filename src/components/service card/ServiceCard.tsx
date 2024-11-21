import './style.css'
import websiteIcon from "../../assets/icon/website.png"
import mobileIcon from "../../assets/icon/mobile.png"
import modelIcon from "../../assets/icon/model.png"
import iotIcon from "../../assets/icon/iot.png"
import gameIcon from "../../assets/icon/game.png"
import arIcon from "../../assets/icon/ar.png"
import useScrollObserver from '../../utils/scrollAnimation'

export interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Web",
    description: "web",
    icon: websiteIcon,
  },
  {
    title: "Mobile",
    description: "mobile",
    icon: mobileIcon,
  },
  {
    title: "3D",
    description: "3d",
    icon: modelIcon,
  },
  {
    title: "IoT",
    description: "iot",
    icon: iotIcon,
  },
  {
    title: "Game",
    description: "game",
    icon: gameIcon,
  },
  {
    title: "AR",
    description: "ar",
    icon: arIcon,
  },
];

const ServiceCard = () => {

  useScrollObserver({
    selector: ".scale-up", // Target elements
    className: "show", // Class to add
    visibilityThreshold: 0.8, // Trigger when 60% of viewport reached
  });

  useScrollObserver({
    selector: ".fade-in", // Target elements
    className: "show", // Class to add
    visibilityThreshold: 0.8, // Trigger when 60% of viewport reached
  });


  
  return (
    <section className="bg-white py-[10rem] service-wrapper fade-in">

      <div className="container mx-auto px-6 lg:px-16 text-center *:text-white">
        <h3 className="font-semibold text-sm uppercase fade-in">// Our Service</h3>
        <h2 className="text-4xl font-bold mt-2 fade-in">
          We Offer a Wide <br /> Variety of IT Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mt-10 px-10 lg:px-32">
        {services.map((service, index) => (
          <div key={index} className="serivce-card scale-up"
            style={{ animationDelay: `${index * 0.2}s`}}
          >
            <img src={service.icon} alt={service.title} className="w-[35px] h-[35px]" />
            <div className="text-lg font-light text-white">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
