import React from 'react';
import Link from 'next/navigation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
import Image from 'next/image';
import { MdGroup, MdLocationPin } from 'react-icons/md';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';

const Slider = ({ filterCards }) => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={false}
      centeredSlides={true}
      spaceBetween={-400}
      slidesPerView={5}
      initialSlide={filterCards.length > 0 ? Number(filterCards.length / 2) : 0}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper my-auto py-10"
    >
      {filterCards.map((card) => {
        return (
          <SwiperSlide
            key={card}
            className="w-[500px] rounded-xl sm:h-[550px] sm:w-[350px] md:h-[600px] md:w-[400px]"
          >
            <div className="my-12 inline-block bg-gradient-to-r from-[#FF04C8] via-[#FFFFFF] to-[#0038FF] rounded-xl p-1">
              <article className="p-4 rounded-xl bg-gradient-to-r from-[#14011f] to-[#010138] text-white w-[500px]">
                <Image
                  src={card.image}
                  width={500}
                  height={100}
                  quality={100}
                  alt="Dev Media"
                  className="rounded-md"
                />
                <div className="flex align-middle my-4 justify-between">
                  <p className="text-xl font-sans">{card.title}</p>
                  <p className="flex gap-2 align-middle text-lg font-light">
                    <MdGroup size="25" /> {card.capacity}
                  </p>
                </div>
                <div className="flex gap-2 align-middle text-md font-sans">
                  <MdLocationPin size="20" />
                  <p>{card.location}</p>
                </div>
                <div className="flex align-middle my-4 gap-8">
                  <p className="flex align-middle gap-2 text-sm font-sans my-2">
                    <AiOutlineCalendar size="20" /> {card.date}
                  </p>
                  <p className="flex align-middle gap-2 text-sm font-sans my-2">
                    <AiOutlineClockCircle size="20" /> {card.time}
                  </p>
                </div>
                <p className="opacity-50">{card.description}</p>
                <div className="flex justify-center mt-4">
                  <button className="text-lg py-1 px-6 bg-gradient-to-r from-[#2BF2FF] to-[#04C6F2] text-black rounded-md">
                    Register
                  </button>
                </div>
              </article>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
