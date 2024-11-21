import CardSlider from '../components/carousel/projectCarousel';
import Company from '../components/company/company8';
import ServiceCard from '../components/service card/ServiceCard';
import AboutSection from '../components/about us/AboutUs';
import MergeCompanies from '../components/company/MergeCompanies';

import TechStack from '../components/tech/techStack';
import '../components/home-animate/animate.css'
const HomePage = () => {
    interface AnimatedTextProps {
        text: string;
        delay?: number;
      }
      
      const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 0.05 }) => {
        return (
            <div className="flex flex-wrap space-x-1">
            {text.split("").reduce<string[][]>((lines, char, index) => {
              if (index % 10 === 0) {
                // สร้างบรรทัดใหม่
                lines.push([]);
              }
              lines[lines.length - 1].push(char); // เพิ่มตัวอักษรในบรรทัดปัจจุบัน
              return lines;
            }, []).map((line, lineIndex) => (
              <div key={lineIndex} className="flex w-full space-x-1">
                {line.map((char, charIndex) => (
                  <span
                    key={`${lineIndex}-${charIndex}`}
                    className={`inline-block animate-slideTilt opacity-0 ${
                      char === " " ? "w-4" : ""
                    }`}
                    style={{ animationDelay: `${(lineIndex * 10 + charIndex) * delay}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            ))}
          </div>
          
        );
      };
      
    return (
    <>

    {/* introduce section */}

    <section className='bg-[#1c1c47] h-[90vh] flex bg-home' >
        <div className="text-white flex flex-col gap-8 w-[25rem] my-auto lg:ms-[10rem] ms-[1.5rem]">
            <h3 className="text-lg lg:text-xl font-extralight animate-fadeinright">// Lorem ipsum dolor sit amet.</h3>
            <h1 className="text-5xl font-extrabold break-words lg:text-7xl"><AnimatedText text="FROM&nbsp;IDEA&nbsp;TO&nbsp;PRODUCT" /></h1>
            <p className=' animate-fadeinup'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente vero autem officia reiciendis ipsum?</p>

            <button className="w-32 rounded-none btn btn-primary">
                LEARN MORE
            </button>
        </div>
    </section>  

    <Company/>
    

    {/* about our company section */}
    <AboutSection/>

    <ServiceCard/>

    <CardSlider/>

    <TechStack/>

    <MergeCompanies/>

    </>
  )
}

export default HomePage