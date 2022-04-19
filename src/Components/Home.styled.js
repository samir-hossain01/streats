import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Raleway", sans-serif;
  .swiper {
    height: 100vh;
    padding: 20px;
    background: #000;
    position: relative;
    .swiper-wrapper {
      .swiper-slide {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          text-decoration: none;
          color: #ffffff;
          font-size: 45px;
          font-weight: 500;
          font-family: "Raleway", sans-serif;
          text-transform: uppercase;
          letter-spacing: 5px;
          opacity: 0.5;
        }
      }
    }
    .box {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, 0%);
      width: 200px;
      height: 200px;
      box-shadow: -7px -40px 102px 39px #bec1c9bf;
      filter: blur(110px);
    }
    .swiper-button-next,
    .swiper-button-prev {
      width: 50px;
      height: 50px;
      z-index: 99;
      padding: 10px;
      color: #ffffff;
    }
    .swiper-pagination {
      left: 50%;
      top: auto;
      bottom: 20px;
      width: 200px;
      height: 50px;
      transform: translate3d(-50%, -50%, 0);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px;
      span {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: green;
        position: relative;
        transition: 1s ease;
      }
      .swiper-pagination-bullet-active {
        :after {
          content: "";
          width: 20px;
          height: 20px;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 0;
          transform: translate(-30%, -30%);
          background: transparent;
          border: 2px solid #ffffff;
        }
      }
    }
  }
`;

export default Wrapper;
