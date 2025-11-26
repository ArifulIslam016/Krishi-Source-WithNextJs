import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

const Slider = () => {
    return (

    <div className='py-14 mt-10 bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] rounded-3xl'>
      <Swiper  navigation={true}      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay,]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay:2000,
        disableOnInteraction:false
      }}
      speed={800}
      loop={true}
      
      
      className="mySwiper">
        <SwiperSlide className='flex justify-center items-center'><img className=' max-w-[300px] max-h-[250px] mx-auto my-auto md:max-w-[400px] md:max-h-[350px] lg:max-w-[600px] lg:max-h-[500px] rounded-2xl' src="https://i.ibb.co.com/bR3q2zNj/farm.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className=' max-w-[300px] max-h-[250px] mx-auto my-auto md:max-w-[400px] md:max-h-[350px] lg:max-w-[600px] lg:max-h-[500px] rounded-2xl' src="https://i.ibb.co.com/tP2zYT9L/farming10.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className=' max-w-[300px] max-h-[250px] mx-auto my-auto md:max-w-[400px] md:max-h-[350px] lg:max-w-[600px] lg:max-h-[500px] rounded-2xl' src="https://i.ibb.co.com/8Jf7S4d/Rice.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className=' max-w-[300px] max-h-[250px] mx-auto my-auto md:max-w-[400px] md:max-h-[350px] lg:max-w-[600px] lg:max-h-[500px] rounded-2xl' src="https://i.ibb.co.com/7dXGBZnK/farming3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className=' max-w-[300px] max-h-[250px] mx-auto my-auto md:max-w-[400px] md:max-h-[350px] lg:max-w-[600px] lg:max-h-[500px] rounded-2xl' src="https://i.ibb.co.com/Q3JXDb0K/carrot.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Slider;