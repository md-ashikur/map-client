import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardItem from "./CardItem";
("./CardItem");
import { Navigation, Autoplay } from "swiper";

const QuickAccesCard = () => {
  const [slides, setSlides] = useState(CardItem);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="">
      <Swiper
      
        breakpoints={{
          360: {
            slidesPerView: 2,
           spaceBetween:5,
          },
          768: {
            slidesPerView: 5,
           
          },
          1024: {
            slidesPerView: 5,
            
          },
        }}
        className="mySwiper"
      >
        {slides.map((elem) => {
          const { id, image, title, date } = elem;

          return (
            //    ==============Slide cards =================
            <SwiperSlide className="flex flex-col items-center" key={id}>
              <a href="https://www.google.com/">
                <div className="relative basis-1/2 w-[170px] lg:w-[200px] h-52 bg-white shadow-lg rounded-lg border border-slate-200 overflow-hidden">
                  {/* Image */}
                  <img
                    className="absolute w-full h-full object-cover"
                    src={image}
                    width="386"
                    height="260"
                    alt="Application 17"
                  />
                  {/* Gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"
                    aria-hidden="true"
                  ></div>
                  {/* Content */}
                  <div className="relative h-full p-5 flex flex-col justify-end">
                    <h3 className="text-sm truncate text-white font-semibold mt-16 mb-0.5">
                      {title}
                    </h3>
                    <p className="text-xs text-white">{date}</p>
                    <a
                      className="text-sm font-medium text-secondary-light hover:text-secondary"
                      href="https://www.google.com/"
                    >
                      Explore -&gt;
                    </a>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default QuickAccesCard;
