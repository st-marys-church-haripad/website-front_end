import { Link, useLocation, useNavigate } from "react-router-dom"
import React, { useEffect } from 'react'
import { logo } from "@/assets/asset"
import { menuItems } from "@/routes/route";
import Banner from "./Banner";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/donate');
  };
   useEffect(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, [location]);
  return (
    <>
      <header>
        <div className="container d-flex align-items-center justify-content-between">
            <div className="logo-area d-flex gap-2 align-items-center">
                <Link to="/">
                    <img src={ logo } alt="logo" className="img-fluid" width={80} height={80} />
                </Link>
                <div className="site-name">
                  <h1 className="fw-600 fs-16 mb-0 text-nowrap">St. Mary's Orthodox Church</h1>
                  <p className="fs-14" style={{textAlign:'right'}}>Haripad, Alappey</p>
                </div>
            </div>
            <div className="d-none d-lg-block">
              <button type="button" className="btn" onClick={handleButtonClick}>Donations</button>
            </div>
            <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars fa-xl"></i>
            </button>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid">
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close border-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-between flex-grow-1 pe-3">
              {menuItems.map((menu, index) => {
                if (!menu?.subMenu || menu.subMenu.length === 0) {
                  return (
                    <li className="nav-item" key={index}>
                      <Link className={`nav-link fs-14 ${location?.pathname == menu?.url ? 'active' : ''}`} aria-current="page" to={menu?.url}>
                        {menu.title}
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li className="nav-item dropdown" key={index}>
                      <Link
                        className="nav-link dropdown-toggle fs-14"
                        to={menu?.url}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {menu.title}
                      </Link>
                      <ul className="dropdown-menu dropdown-div">
                        {menu.subMenu.map((item, subIndex) => (
                          <li key={subIndex} className="mb-1">
                            <Link className="dropdown-item fs-14" to={item?.url}>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
              })}
            </ul>
            </div>
          </div>
        </div>
      </nav>
      <Banner location={location} />
    </>
  );
}

export default Header
