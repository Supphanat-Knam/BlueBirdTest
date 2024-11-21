import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import './style.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useScrollObserver from '../../utils/scrollAnimation';

import Miti from "../../assets/projects/3D.png";
import Arv from "../../assets/projects/ARV.png";
import Band from "../../assets/projects/Band.png";
import ms from "../../assets/projects/ms.png";
import SCB from "../../assets/projects/SCB.png";
import VR from "../../assets/projects/VR.png";


const cardData = [
  {
    title: 'DT Demo Day',
    category: '3D Models/Animations',
    image: Miti,
  },
  {
    title: 'ARV Website',
    category: 'Web App / Mobile',
    image: Arv,
    
  },
  {
    title: 'Band hiring system',
    category: 'Web App',
    image: Band,
  },
  {
    title: 'Conference registration system samatcha',
    category: 'Web App',
    image: ms,
  },
  {
    title: 'VR',
    category: 'VR',
    image: VR ,
  },
  {
    title: 'Open Bank Account (Individual)',
    category: 'Web App / Mobile',
    image: SCB,
   
  },
];

const SwiperCarousel: React.FC = () => {

  useScrollObserver({
    selector: ".fade-in", // Target elements
    className: "show", // Class to add
    visibilityThreshold: 0.6, // Trigger when 60% of viewport reached
  });

  return (
    <div className="relative w-full py-10 mx-auto">
      <h2 className="mb-4 text-3xl font-bold text-center fade-in">Introduce Our Projects</h2>
      <p className="max-w-2xl px-5 mx-auto mb-10 text-center text-gray-500 fade-in ">
        Software development outsourcing is just a tool to achieve business goals. But there is no way to get worthwhile results without cooperation and trust between a client company.
      </p>
      <Swiper
        modules={[Navigation, Pagination]}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          el: '.custom-pagination-container',
        }}
        breakpoints={{
          // หน้าจอขนาดเล็ก
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          // หน้าจอขนาดกลาง
          768: {
            slidesPerView: 2.5,
            spaceBetween: 25,
          },
          // หน้าจอขนาดใหญ่
          1024: {
            slidesPerView: 3.75,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
    {cardData.map((card, index) => (
    <SwiperSlide key={index}>
      <div
        className="bg-white overflow-hidden *:transform *:hover:scale-110 *:transition-transform *:duration-300 !h-[20rem] fade-in px-3 sm:px-0"
        style={{ animationDelay: `${index * .2}s`}} // เพิ่ม delay ทีละ 0.5s ตามลำดับ
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-[15rem] object-cover"
        />
        <div className="relative">
          <div className="p-4 text-white bg-[#1C1C47] absolute top-[-40px] w-5/6 left-1/2 transform -translate-x-1/2 overflow-hidden">
            <div className="relative">
              <div
                className="absolute w-0 h-0 top-[-6.5px] right-[-24.5px] -rotate-12 
                      border-l-[66px] border-l-transparent
                      border-t-[75px] border-t-[#253488]
                      border-r-[35px] border-r-transparent"
              ></div>
            </div>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-gray-200">{card.category}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}

      </Swiper>

      {/* Pagination ด้านนอก Swiper */}
      <div className="mt-4 custom-pagination-container"></div>

    </div>
  );
};

export default SwiperCarousel;
