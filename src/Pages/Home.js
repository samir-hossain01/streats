/** @format */

import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";
// import required modules
import { Mousewheel, Pagination, Navigation } from "swiper";
// import images
import Wrapper from "../Components/Home.styled";

function Home() {
  return (
    <Wrapper>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, Navigation]}
        className='mySwiper'>
        <SwiperSlide>
          <div className='link_container'>
            <Link to='/banner'>home</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='link_container'>
            <Link to='/about'>about</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='link_container'>
            <Link to='/roadmap'>roadmap</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='link_container'>
            <Link to='/team'>team</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='link_container'>
            <Link to='/faq'>faq</Link>
          </div>
        </SwiperSlide>
        <div className='box'></div>
      </Swiper>
    </Wrapper>
  );
}
export default Home;
