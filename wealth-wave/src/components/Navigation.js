import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container-fluid w-nav">
            <a class="navbar-brand" href="#">
              <img
                src="Images/logo (2).png"
                className="logo"
                alt=""
                srcset=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="sidebar offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Wealth Wave
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body d-flex flex-column p-4">
                <ul className="navbar-nav nav-it justify-content-center align-items-center fs-5 pe-5 mt-2">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">

                      Home
                    </NavLink>
                  
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                    About
                    </NavLink>
                      
                  
                  </li>
                  <li className="nav-item">
                    <NavLink to='/sip' className="nav-link" href="#footer">
                      SIP Calculator
                    </NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink to='market' className="nav-link">
                      Market
                  </NavLink>
                  </li>
                  {/* <li className="nav-item">
                  <NavLink to='discuss' className="nav-link">
                      Discussion Board
                  </NavLink>
                  </li> */}
                  {/* <li class="nav-item">
                </li> */}

                  <div
                    className="d-flex justify-content-end
                  align-items-center gap-3 main-btns"
                  >
                    <NavLink to='register'>
                    <a href="">
                      <button
                        className="btn text-white"
                        style={{
                          backgroundColor: "green",
                          borderRadius: "12px",
                        }}
                      >
                        Register
                      </button>
                    </a>
                    </NavLink>
                    <a href="courses.html">
                      <button
                        className="btn text-white"
                        style={{
                          backgroundColor: "orange",
                          borderRadius: "12px",
                        }}
                      >
                        Join Club
                      </button>
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        </div>
    )
}

export default Navigation
