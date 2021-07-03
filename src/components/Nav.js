import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { BsList } from "react-icons/bs";

function Nav() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div
          className="nav-logo"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p>snr</p>
        </div>
        <ul className="nav-links"></ul>
        <div
          className="nav-toggler"
          onClick={handleClick}
          className="nav-logo"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {clicked ? (
            <VscChromeClose id="nav-icon" />
          ) : (
            <BsList id="nav-icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
