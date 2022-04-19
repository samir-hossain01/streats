import React from "react";
import Wrapper from "./Banner.styled";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Banner() {
  const Navigate = useNavigate();
  function handleClick() {
    Navigate("/contact");
  }
  const animate = {
    y: [200, 0],
    opacity: [0, 1],
    transition: {
      duration: 2,
    },
  };
  const animate2 = {
    y: [200, 0],
    opacity: [0, 1],
    transition: {
      duration: 2,
    },
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="banner_wrapper">
          <motion.div animate={animate} className="buttnoMint">
            <button className="button">Mint Now</button>
          </motion.div>
          <motion.div animate={animate2} className="buttonRed">
            <button onClick={handleClick} className="button">
              REDEM
            </button>
          </motion.div>
        </div>
      </div>
      {/* import footer here  */}
    </Wrapper>
  );
}

export default Banner;
