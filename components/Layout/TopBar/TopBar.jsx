import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../../../public/assets/jpg/general/logo2.png"
import Image from "next/image";
import { useRouter } from "next/router";

const MainTopBar = () => {

  const router = useRouter()
  const flag = router.pathname === '/'

  const [topBarActive, setTopBarActive] = useState(false)

  const changeTopBar = () => {
    window.scrollY >= 100 ? setTopBarActive(true) : setTopBarActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeTopBar)
  }, []);

  return (
    <div 
      className={flag ? 
        topBarActive ?
        'card top-container active' : 
        'card top-container' :
        'card top-container inactive'
      } 
      style={{borderRadius: 0,  transition: '1s ease'}}
    >
      <div className="card-body" style={{borderRadius: "0"}}>
        <div className="topBar">
          <div className="logo">
            <a href="/">
              <Image src={logo} alt="Coronado" />
            </a>
          </div>
          <div className="nav navHugeScreen">
            <Link
              className="font-size-14 kit__utils__link"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-size-14 kit__utils__link"
              href="/habitaciones"
            >
              Nuestras habitaciones
            </Link>
            <Link
              className="font-size-14 kit__utils__link"
              href="/resto"
            >
               Resto
            </Link>
            <Link
              className="font-size-14 kit__utils__link"
              href="/contact"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTopBar;
