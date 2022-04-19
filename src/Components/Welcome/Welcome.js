import React, { useState } from "react";
import Wrapper from "./Welcome.styled";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";
// import required modules
import { Navigation } from "swiper";
// import images
import AboutSlider from "../../images/aboutSlider.png";
import AboutSlider2 from "../../images/aboutSlider2.png";
import AboutSlider3 from "../../images/aboutSlider3.png";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function Welcome() {
  // counter function
  const [counter, setCounter] = useState(1);
  function decrementCounter() {
    if (counter <= 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  }

  const animate = {
    y: [300, 0],
    opacity: [0, 1],
    transition: {
      duration: 2,
    },
  };
  const animate2 = {
    y: [-300, 0],
    opacity: [0, 1],
    transition: {
      duration: 2,
    },
  };

  return (
    <Wrapper>
      <div className="grid-row" id="about">
        <div className="grid-column">
          <motion.div className="swiper_slider" animate={animate2}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <div className="row">
                  <img src={AboutSlider} alt="slide" />
                </div>
                <div className="row-2">
                  <img src={AboutSlider2} alt="slide" />
                  <img src={AboutSlider3} alt="slide" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <img src={AboutSlider} alt="slide" />
                </div>
                <div className="row-2">
                  <img src={AboutSlider2} alt="slide" />
                  <img src={AboutSlider3} alt="slide" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <img src={AboutSlider} alt="slide" />
                </div>
                <div className="row-2">
                  <img src={AboutSlider2} alt="slide" />
                  <img src={AboutSlider3} alt="slide" />
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
        <div className="grid-column">
          <motion.div className="counter-container" animate={animate}>
            <button className="btn welcomeBtn">Mint Now</button>
            <div className="counter">
              <button className="btn" onClick={decrementCounter}>
                <Icon icon="akar-icons:minus" />
              </button>
              <div className="btn inputField">{counter}</div>
              <button
                className="btn"
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                <Icon icon="ant-design:plus-outlined" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Welcome;

/* <div className="row">
                <img src={AboutSlider} alt="slide" />
              </div>
              <div className="row-2">
                <img src={AboutSlider2} alt="slide" />
                <img src={AboutSlider3} alt="slide" />
              </div> */
