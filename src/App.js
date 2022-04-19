import { Route, Routes } from "react-router-dom";
import Topnav from "./Components/Topnav/Topnav";

// import components for pages
import Banner from "./Components/Banner/Banner";
import Home from "./Pages/Home";
import Faq from "./Components/Faq/Faq";
import MeetTeam from "./Components/MeetTeam/MeetTeam";
import Roadmap from "./Components/Roadmap/Roadmap";
import Roadmaptwo from "./Components/Roadmaptwo/Roadmaptwo";
import Welcome from "./Components/Welcome/Welcome";
import Contact from "./Pages/Contact";
import { useEffect, useState } from "react";

function App() {
  const [roadmap, setRoadmap] = useState(false);
  // custom hook for load roadmap with screen size
  useEffect(() => {
    function checkScreenSize() {
      if (window.innerWidth < 992) {
        setRoadmap(true);
      } else {
        setRoadmap(false);
      }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.addEventListener("resize", checkScreenSize);
    };
  }, [roadmap]);

  return (
    <div>
      <Topnav />
      <Routes>
        <Route index end element={<Home />} />
        <Route path="banner" end element={<Banner />} />
        <Route path="about" end element={<Welcome />} />
        <Route
          path="roadmap"
          end
          element={roadmap ? <Roadmaptwo /> : <Roadmap />}
        />
        <Route path="team" end element={<MeetTeam />} />
        <Route path="faq" end element={<Faq />} />
        <Route path="contact" end element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
