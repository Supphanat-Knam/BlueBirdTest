
import "swiper/css";
import "swiper/css/pagination";

import AboutImage1 from "../../assets/project1.png";
import AboutImage2 from "../../assets/project2.png";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaFaceSmileBeam } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import useScrollObserver from "../../utils/scrollAnimation";

const AboutSection = () => {
    const [happyClients, setHappyClients] = useState(0); // State สำหรับ Happy Clients
    const [projectsDone, setProjectsDone] = useState(0); // State สำหรับ Projects Done

    const happyClientElement = useRef(null); // อ้างอิง Element ของ Happy Clients
    const projectsDoneElement = useRef(null); // อ้างอิง Element ของ Projects Done
  
    // ฟังก์ชันสำหรับนับตัวเลข
    const countToNumber = (setter: React.Dispatch<React.SetStateAction<number>>, target: number, duration: number) => {
      const increment = target / (duration / 10); // คำนวณจำนวนที่จะเพิ่มในแต่ละ interval
      let current = 0;
  
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(interval); // หยุดเมื่อถึงค่าเป้าหมาย
          setter(target); // ตั้งค่าเป็นค่าเป้าหมายสุดท้าย
        } else {
          setter(Math.ceil(current)); // ปัดเศษขึ้นและอัปเดต State
        }
      }, 10); // ความถี่ของ interval
    };


    useEffect(() => {
      const observerCallback = (mutations: MutationRecord[]) => {
        mutations.forEach((mutation) => {
          if (
            mutation.target instanceof HTMLElement &&
            mutation.target.classList.contains("show") // ตรวจสอบว่ามีคลาส show หรือไม่
          ) {
            if (mutation.target === happyClientElement.current) {
              countToNumber(setHappyClients, 459, 800); // เรียก countToNumber
            } else if (mutation.target === projectsDoneElement.current) {
              countToNumber(setProjectsDone, 123, 800); // เรียก countToNumber
            }
          }
        });
      };
  
      // สร้าง MutationObserver
      const observer = new MutationObserver(observerCallback);
  
      // เริ่มสังเกตการณ์ที่ Element
      if (happyClientElement.current) {
        observer.observe(happyClientElement.current, { attributes: true }); // ตรวจสอบ attributes
      }
      if (projectsDoneElement.current) {
        observer.observe(projectsDoneElement.current, { attributes: true }); // ตรวจสอบ attributes
      }
  
      // ทำความสะอาด observer เมื่อ component ถูก unmount
      return () => {
        observer.disconnect();
      };
    }, [happyClients, projectsDone]);

    useScrollObserver({
      selector: ".scale-up", // Target elements
      className: "show", // Class to add
      visibilityThreshold: 0.9, // Trigger when 60% of viewport reached
    });

    useScrollObserver({
      selector: ".left-slide", // Target elements
      className: "show", // Class to add
      visibilityThreshold: 0.9, // Trigger when 60% of viewport reached
    });

    useScrollObserver({
      selector: ".fade-in", // Target elements
      className: "show", // Class to add
      visibilityThreshold: 0.9, // Trigger when 60% of viewport reached
    });


  return (
    <section className="bg-gray-100 py-[5rem] md:pt-[10rem] md:pb-[15rem] px-[2rem] md:px-[10rem]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="flex flex-col justify-center left-slide">
          <h3 className="text-purple-600 font-semibold text-lg uppercase mt-5">
            About us
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight mt-5">
            Your Partner for{" "}
            <span className="text-black">Software Innovation</span>
          </h2>
          <p className="text-gray-600 mt-6">
            Engitech is the partner of choice for many of the world’s leading
            enterprises, SMEs, and technology challengers. We help businesses
            elevate their value through custom software development, product
            design, QA, and consultancy services.
          </p>
          <a className="btn btn-primary w-48 rounded-none text-white uppercase mt-8">
            Learn more about us
          </a>
        </div>

        <div className="relative hidden md:block fade-in">
          {/* wrapper first image */}
          <div className="flex items-center justify-center relative hover:scale-105 transition duration-300 z-10">
            <div className="bg-white w-[40rem] h-[25rem] rounded-lg shadow-md relative z-[2]">
              <div className="flex p-3 gap-2 absolute top-2 left-2">
                <div>
                  <span className="bg-red-500 inline-block w-3 h-3 rounded-full"></span>
                </div>
                <div>
                  <span className="bg-yellow-500 inline-block w-3 h-3 rounded-full"></span>
                </div>
                <div>
                  <span className="bg-green-500 inline-block w-3 h-3 rounded-full"></span>
                </div>
              </div>
              <img
                src={AboutImage1}
                alt=""
                className="absolute top-[4rem] left-1/2 transform -translate-x-1/2 w-11/12 h-[78%] bg-contains"
              />
            </div>
          </div>

          {/* wrapper second image */}
          <div className="absolute top-[28rem] left-[30rem] transform -translate-x-1/2 -translate-y-1/2 z-[1] hover:scale-105 transition duration-300"
          >
            <div className="flex items-center justify-center relative">
                <div className="bg-white w-[25rem] h-[18rem] rounded-lg shadow-md relative">
                <div className="flex p-3 gap-2 absolute top-2 left-2">
                    <div>
                    <span className="bg-red-500 inline-block w-3 h-3 rounded-full"></span>
                    </div>
                    <div>
                    <span className="bg-yellow-500 inline-block w-3 h-3 rounded-full"></span>
                    </div>
                    <div>
                    <span className="bg-green-500 inline-block w-3 h-3 rounded-full"></span>
                    </div>
                </div>
                <img
                    src={AboutImage2}
                    alt=""
                    className="absolute top-[4rem] left-1/2 transform -translate-x-1/2 w-11/12 h-[72%] bg-contains"
                />
                </div>
            </div>
          </div>

          {/* wrapper third image */}
          <div className="absolute top-[2rem] left-[40rem] transform -translate-x-1/2 -translate-y-1/2 z-[1] hover:scale-105 transition duration-300"
          >
            <div className="flex items-center justify-center relative">
                <div className="bg-white w-[25rem] h-[18rem] rounded-lg shadow-md relative">
                <div className="flex p-3 gap-2 absolute top-2 left-2">
                    <div>
                    <span className="bg-red-500 inline-block w-3 h-3 rounded-full"></span>
                    </div>
                    <div>
                    <span className="bg-yellow-500 inline-block w-3 h-3 rounded-full"></span>
                    </div>
                    <div>
                    <span className="bg-green-500 inline-block w-3 h-3 rounded-full"></span>
                    </div>
                </div>
                <img
                    src={AboutImage2}
                    alt=""
                    className="absolute top-[4rem] left-1/2 transform -translate-x-1/2 w-11/12 h-[72%] bg-contains"
                />
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 flex gap-8">
        <div className="flex gap-3 fade-in" ref={happyClientElement}>
            <div className="bg-[#45b4fa] flex justify-center items-center w-16 h-16 rounded-sm">
                <FaFaceSmileBeam size={30} color="white"/>
            </div>
            <hr />
            <div>
                <p className="text-xl font-bold text-[#16a6ff]">Happy Client</p>
                <p className="text-[#266d99] text-lg font-semibold mt-2">{happyClients}</p>
            </div>
        </div>

        <div className="flex gap-3 fade-in" ref={projectsDoneElement}>
            <div className="bg-white flex justify-center items-center w-16 h-16 rounded-sm">
                <FaRegCheckSquare size={30} className="text-[#45b4fa]"/>
            </div>
            <hr />
            <div>
                <p className="text-xl font-bold text-[#16a6ff]">Projects Done</p>
                <p className="text-[#266d99] text-lg font-semibold mt-2">{projectsDone}</p>
            </div>
        </div>
      </div>


    </section>
  );
};

export default AboutSection;
