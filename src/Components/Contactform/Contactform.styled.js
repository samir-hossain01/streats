/** @format */

import styled from "styled-components";
// import images
import Background from "../../images/contactpagebackground.png";
const Wrapper = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  form {
    max-width: 479px;
    width: 100%;
    .row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-bottom: 20px;
    }
    .row-2,
    .row-3,
    .row-4,
    .row-5 {
      margin-bottom: 20px;
    }
    .row-4 {
      display: flex;
      align-items: center;
      input {
        width: 20px;
        height: 20px;
        border-radius: 5px;
        cursor: pointer;
      }
      label {
        margin-left: 20px;
        font-size: 19px;
        font-weight: 500;
        letter-spacing: 1px;
        cursor: pointer;
        a {
          color: #99a332;
          text-decoration: none;
          text-transform: uppercase;
        }
      }
    }
    .row-5 {
      text-align: center;
      input {
        border: none;
        outline: none;
        color: #ffffff;
        font-size: 24px;
        font-weight: 500;
        padding: 11px 45px;
        background: linear-gradient(90.26deg, #36454f 0.74%, #99a332 100%);
        border-radius: 13px;
        cursor: pointer;
        :hover {
          background: linear-gradient(90.26deg, #99a332 0.74%, #36454f 100%);
        }
      }
    }
  }
`;

export default Wrapper;

export const Formcontrol = styled.div`
  input {
    width: 100%;
    background: #08afd1;
    border: 1px solid #ffffff;
    border-radius: 6px;
    color: #ffffff;
    padding: 15px 30px;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    ::placeholder {
      font-size: 19px;
      font-weight: 500;
      color: #ffffff;
      text-transform: uppercase;
    }
  }

  textarea {
    width: 100%;
    background: #08afd1;
    border: 1px solid #ffffff;
    border-radius: 6px;
    color: #ffffff;
    padding: 25px 30px;
    font-size: 19px;
    font-weight: 500;
    outline: none;
    min-height: 150px;
    ::placeholder {
      font-size: 19px;
      font-weight: 500;
      color: #ffffff;
      text-transform: uppercase;
    }
  }
`;
