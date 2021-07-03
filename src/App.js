import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./css/styles.css";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Nav />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
