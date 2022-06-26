import React from 'react'
import Link from "next/link"

export const NavLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a className="header__menu-link">
              Главная
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#">
            <a className="header__menu-link">
              Технологии
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="header__menu-link" >
              График полетов
            </a>
          </Link>
        </li>
        <li>
          <Link  href="#">
            <a className="header__menu-link">
              Гарантии
            </a>
          </Link>
        </li>
        <li>
          <Link  href="#">
            <a className="header__menu-link">
              О компании
            </a>
          </Link>
        </li>
        <li>
          <Link  href="#">
            <a className="header__menu-link">
              Контакты
            </a>
          </Link>
        </li>
        <li>
          {/* <Link  href="#">
            <a className="header__menu-link">
              Контакты
            </a>
          </Link> */}
        </li>
      </ul>
    </div>
  )
}

export default NavLinks





