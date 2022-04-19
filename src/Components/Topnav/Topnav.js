import React from "react";
// import { HashLink } from "react-router-hash-link";
import Wrapper from "./Topnav.styled";
// import { Icon } from "@iconify/react";

import Mainlogo from "../../images/mainLogo.png";
import { Link } from "react-router-dom";
// import { Icon } from "@iconify/react";
// import Twitter from "../../images/Twitter.png";
// import Discord from "../../images/Discord.png";

function Topnav() {
  // // window resize hook
  // useEffect(() => {
  //   // window size hook for sidenav
  //   function checkScreenSize() {
  //     if (window.innerWidth > 1056) {
  //       setMobileMenu(false);
  //     }
  //   }
  //   checkScreenSize();
  //   window.addEventListener("resize", checkScreenSize);
  //   return () => window.removeEventListener("resize", checkScreenSize);
  // }, [setMobileMenu]);

  // // for mobile sidenav display
  // useEffect(() => {
  //   const navContainer = document.querySelector(".nav-link-container");
  //   if (mobileMenu) {
  //     navContainer.style.height = 100 + "%";
  //   } else {
  //     navContainer.style.height = 0 + "%";
  //   }
  // }, [mobileMenu]);

  // // scroll with offset
  // const scrollWithOffset = (el) => {
  //   const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  //   const yOffset = -120;
  //   window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  // };

  return (
    <Wrapper>
      <Link to="/">
        <img src={Mainlogo} alt="logo" />
      </Link>
    </Wrapper>
  );
}
export default Topnav;
