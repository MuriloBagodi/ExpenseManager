import "../Navbar/Navbar.css";

import Logo from "../../img/BrandMSBagodiWhite.png";

function Navbar(props) {
  // const primary = document.querySelector(".primary__Navigation");
  // const navToggle = document.querySelector(".mobile__nav__toggle");
  window.onload = function () {
    const primary = document.querySelector(".primary__Navigation");
    const navToggle = document.querySelector(".mobile__nav__toggle");
    
      navToggle.addEventListener("click", () => {
        const visible = primary.getAttribute("data-visible");
        if (visible === "false") {
          primary.setAttribute("data-visible", true);
          navToggle.setAttribute("aria-expanded", true);
        } else if (visible === "true") {
          primary.setAttribute("data-visible", false);
          navToggle.setAttribute("aria-expanded", false);
        }
      });
    
  };

  return (
    <div>
      <div className="navbar__Container">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        {/* <div className="line"></div> */}
        <button
          className="mobile__nav__toggle"
          aria-controls="primary-navigation"
          aria-expanded="false"
        ></button>
        <ul
          data-visible="false"
          id="primary-navigation"
          className="primary__Navigation"
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Expenses</a>
          </li>
          <li>
            <a href="#">Hire Me</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
