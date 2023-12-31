import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import logos from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./BootstrapNavbar.css";

const BootstrapNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`navigation-bar navbar flex-xl-nowrap py-2 ${
          scrolled ? "scrolled" : ""
        }`}
        data-bs-theme="dark"
      >
        <div className="container-xl container-fluid">
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand className="d-flex align-items-center gap-2">
              <img
                className="myLogo"
                src={logos}
                alt="logo"
                width="60"
                height="60"
              />
              <p className="logo-header">Bored Tunnelers</p>
            </Navbar.Brand>
          </Link>

          <div class="sidebar ">
            <div
              class="offcanvas-xl offcanvas-end"
              tabindex="-1"
              id="sidebarMenu"
            >
              <div class="offcanvas-header">
                {/* Off Canvas Heading */}
                <Navbar.Brand className="ms-3" href="/">
                  <span className="logo-header">Bored Tunnelers</span>
                </Navbar.Brand>
                {/* Off Canvas Close Button */}
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#sidebarMenu"
                ></button>
              </div>

              <div class="offcanvas-body py-2 d-flex mx-2 overflow-y-auto">
                <ul class="nav flex-column flex-xl-row align-items-xl-center">
                  <li class="nav-item ">
                    <Link class="nav-link text-white hover-line" to="/">
                      <div
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        Home
                      </div>
                    </Link>
                  </li>

                  {/* <li class="nav-item mt-2 mt-xl-0 ">
                    <Link
                      class="nav-link text-white hover-line"
                      to="/our-story"
                    >
                      <div
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        Our Story
                      </div>
                    </Link>
                  </li> */}
                  <li class="nav-item mt-2 mt-xl-0 ">
                    <Link class="nav-link text-white hover-line" to="/about">
                      <div
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        About Us
                      </div>
                    </Link>
                  </li>

                  <li class="nav-item mt-2 mt-xl-0">
                    <Link class="nav-link text-white hover-line" to="/team">
                      <div
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        Team
                      </div>
                    </Link>
                  </li>

                  <li class="nav-item mt-2 mt-xl-0">
                    <Link
                      class="nav-link text-white hover-line"
                      to="/featuredPage"
                    >
                      <div
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        Featured
                      </div>
                    </Link>
                  </li>

                  <li class="nav-item mt-2 mt-xl-0">
                    <Link
                      class="nav-link text-white hover-line"
                      to="/technology"
                    >
                      <div
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        Technology
                      </div>
                    </Link>
                  </li>

                  <li class="nav-item mt-2 mt-xl-0">
                    <Link
                      class="nav-link text-white hover-line"
                      to="/sponsorship"
                    >
                      <div
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        Sponsorship
                      </div>
                    </Link>
                  </li>

                  <li class="nav-item mt-4 mt-xl-0">
                    <Link class="nav-link ms-2 p-0 text-white" to="/contact">
                      <button
                        className="btn btn-primary rounded rounded-3"
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                      >
                        Contact Us
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul class="navbar-nav flex-row d-xl-none">
            <li class="nav-item text-nowrap">
              <button
                class="nav-link px-3 text-white bg-dark border-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebarMenu"
              >
                <i class="bi bi-list fs-4"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default BootstrapNavbar;
