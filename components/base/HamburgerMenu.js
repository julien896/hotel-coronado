import React from 'react';
import { Menu, Dropdown  } from 'antd';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const HamburgerMenu = () => {

    const menu = (
        <Menu>
          <Menu.Item>
            <span>
            <Link
              className="font-size-14 kit__utils__link"
              href="/"
            >
              Home
            </Link>
            </span>
          </Menu.Item>
          <Menu.Item>
          <span>
            <Link
              className="font-size-14 kit__utils__link"
              href="/rooms"
            >
              Nuestras habitaciones
            </Link>
            </span>
          </Menu.Item>
          <Menu.Item>
            <span>
                <Link
                  className="font-size-14 kit__utils__link"
                  href="/resto"
                >
                  Resto
                </Link>
            </span>
          </Menu.Item>
          <Menu.Item>
            <span>
                <Link
                  className="font-size-14 kit__utils__link"
                  href="/contact"
                >
                  Contacto
                </Link>
            </span>
          </Menu.Item>
        </Menu>
      );

      return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 25, color: "#fff" }} />
            </a>
        </Dropdown>
      )
}
 
export default HamburgerMenu; 

 