/** @format */

import styled from "styled-components";
import SliderBg from "../../images/about.png";

const Wrapper = styled.div`
  background: url(${SliderBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  padding: 50px;
  display: flex;
  align-items: center;
  @media (max-width: 992px) {
    padding: 20px;
  }
  .grid-row {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-gap: 20px;
    max-width: 1110px;
    width: 100%;
    margin: auto;
    @media (max-width: 650px) {
      grid-template-columns: 100%;
    }
    .grid-column {
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 867px) {
        .grid-column {
          justify-content: flex-end;
        }
      }
      .swiper {
        width: 500px;
        height: 500px;
        padding: 15px;
        background: linear-gradient(
          180deg,
          rgba(54, 69, 79, 0.69) 6.77%,
          rgba(151, 161, 50, 0.71) 100%
        );
        @media (max-width: 575px) {
          width: 320px;
        }

        border-radius: 10px;
        .swiper-wrapper {
          margin-top: 70px;
          .swiper-slide {
            height: 400px;
            text-align: center;
            img {
              width: 200px;
            }
          }
        }
        .swiper-button-prev,
        .swiper-button-next {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          left: 15px;
          top: 30px;
          background: url("https://api.iconify.design/ant-design/left-outlined.svg?color=white");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 40px;
          background-color: #9aa71c87;
          cursor: pointer;
          :hover {
            background-color: #9aa71c;
          }
          ::after {
            content: "";
          }
        }
        .swiper-button-next {
          left: 80px;
          background: url("https://api.iconify.design/ant-design/right-outlined.svg?color=white");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 40px;
          background-color: #9aa71c87;
        }
      }
      .counter-container {
        text-align: center;
        button {
          cursor: pointer;
          font-size: 18px;
          @media (max-width: 400px) {
            font-size: 18px;
          }
        }
        .counter {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          .inputField {
            width: 100px;
            margin: 0 20px;
            font-size: 18px;
            @media (max-width: 400px) {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
