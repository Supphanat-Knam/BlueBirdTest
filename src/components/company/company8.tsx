import scb from "../../assets/workex_8/scb.png";
import dtac from "../../assets/workex_8/dtac.png";
import krungthai from "../../assets/workex_8/krungthai.png";
import ai from "../../assets/workex_8/Arv-Logo.png";
import pttep from "../../assets/workex_8/PTTEP.png";
import fwd from "../../assets/workex_8/fwd.png";
import seagte from "../../assets/workex_8/seagate.png";
import publichealth from "../../assets/workex_8/public-health.png";
import { useState } from 'react';
import useScrollObserver from "../../utils/scrollAnimation";

// สมมุติว่า customerList ของคุณถูกประกาศไว้แล้ว
const customerList = [
    { id: 1, name: "DTAC", img: dtac, w: '9.375rem', h: '3.75rem' },
    { id: 2, name: "SCB", img: scb, w: '6.25rem', h: '2.5rem' },
    { id: 3, name: "Krungthai", img: krungthai, w: '6.25rem', h: '2.5rem' },
    { id: 4, name: "AI", img: ai, w: '6.25rem', h: '2.5rem' },
    { id: 5, name: "PTTEP", img: pttep, w: '3.4375rem', h: '2.5rem' },
    { id: 6, name: "FWD", img: fwd, w: '6.25rem', h: '3.125rem' },
    { id: 7, name: "SEAGATE", img: seagte, w: '6.25rem', h: '2.5rem' },
    { id: 8, name: "PublicHealth", img: publichealth, w: '3.75rem', h: '3.125rem' },
];

const Company = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // ใช้สำหรับเก็บ index ของรูปที่ถูกคลิก

  const handleImageClick = (index:number) => {
    // ตรวจสอบการคลิก
    console.log("Image clicked, active index:", index);
    setActiveIndex(index === activeIndex ? null : index); // เปลี่ยนสถานะเมื่อคลิก
  };

  useScrollObserver({
    selector: ".fade-in", // Target elements
    className: "show", // Class to add
    visibilityThreshold: 0.6, // Trigger when 60% of viewport reached
  });

  return (
    <section className=" bg-gray-200 px-[2rem] md:px-[10rem]">
      <div className=" py-2 scrollbar-hide overflow-x-auto whitespace-nowrap flex gap-10  lg:justify-between lg:container lg:mx-auto ">
        {customerList.map((customer, index) => (
          <div
            key={customer.id}
            className="h-[5rem]  flex justify-center items-center  fade-in"style={{ minWidth: customer.w , animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={customer.img}
              alt={customer.name}
              className={`transition-all duration-500 ease-in-out transform ${
                activeIndex === index ? '' : 'grayscale'
              } hover:grayscale-0`} // ใช้ hover เพื่อทำให้ภาพกลับเป็นสีเมื่อเมาส์อยู่
              style={{
                width: customer.w, // ขนาดรูปที่ใหญ่ขึ้น
                height:customer.h, // ขนาดสูงที่เหมาะสม
                cursor: 'pointer',
              }}
              onClick={() => handleImageClick(index)} // เมื่อคลิกเปลี่ยนสถานะ
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Company;
