/** @format */

import styled from "styled-components";

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: 50px;
  left: 50px;
  z-index: 9999;
  background: transparent;
  nav {
    padding: 15px 30px;
    a {
      img {
        width: 80px;
      }
    }
  }
`;
export default Wrapper;
