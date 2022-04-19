/** @format */

import styled from "styled-components";
import SliderBg from "../../images/bannerBg.png";
const Wrapper = styled.div`
  background: url(${SliderBg});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  .banner_wrapper {
    height: 100vh;
    text-align: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 1028px) {
      padding: 170px 2px;
      width: 43%;
      left: 0;
      top: -29px;
    }
    @media (max-width: 900px) {
      height: 100vh;
      padding: 0;
      margin: 0;
      display: flex;
      top: 0;
      align-items: center;
      flex-direction: column;

      width: 100%;
      justify-content: center;
      left: 0;
    }
  }

  .button {
    margin-bottom: 20px;
    background: rgb(17, 124, 217);
    background-image: linear-gradient(
      90deg,
      rgba(17, 124, 217, 1) 0%,
      rgba(54, 69, 79, 1) 0%,
      rgba(153, 163, 50, 1) 100%,
      rgba(153, 163, 50, 1) 100%,
      rgba(0, 120, 158, 1) 100%,
      rgba(0, 154, 194, 1) 100%
    );
    font-family: Hagin-Font-Medium;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    padding: 10px 30px;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
    color: white;
    width: 200px;
    border: 1px solid rgb(17, 124, 217);
    font-size: 20px;
    transition: 0.5s ease-in-out;
    :hover {
      background: transparent;
    }
    @media (max-width: 1028px) {
      width: 150px;
      font-size: 17px;
      margin-bottom: 6px;
    }
    :hover {
      border: 1px solid rgb(17, 124, 217);
      color: white;
    }
  }
  .buttnoMint {
    @media (max-width: 1028px) {
      margin-top: 46px;
    }
    @media (max-width: 900px) {
      margin-top: 0px;
    }
  }
  .body {
    img {
      width: 100%;
    }
  }
`;

export default Wrapper;
