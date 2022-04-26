import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../../../public/assets/jpg/general/logo2.png"
import { Input, Badge, Avatar } from "antd";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import Image from "next/image";

const MainTopBar = () => {

  const [topBarActive, setTopBarActive] = useState(false)

  const changeTopBar = () => {
    window.scrollY >= 100 ? setTopBarActive(true) : setTopBarActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeTopBar)
  }, []);

  return (
    <div 
      className={topBarActive ? 'card top-container active' : 'card top-container'} 
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
              <a target="_blank" rel="noopener noreferrer">
              Home
              </a>
            </Link>
            <Link
              className="font-size-14 kit__utils__link"
              href="/home/workshifts"
            >
              Hospedaje
            </Link>
            <Link
              className="font-size-14 kit__utils__link"
              href="/home/absences"
            >
               Resto
            </Link>
            <Link
              className="font-size-14 kit__utils__link"
              href="/home/salary"
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
