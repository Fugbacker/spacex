import React from 'react'
import Link from "next/link"
import MobileNavigation from './navigations/mobile-navigation'
import Navigation from './navigations/navigation'

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="content">
        <div className="header">
        <Link href="/">
            <a className="header__logo">
              <div className="header__logo-corner">
                <div className="header__logo-img" />
              </div>
            </a>
          </Link>
          <Navigation />
          <MobileNavigation />
        </div>
      </div>
    </div>
  )
}

export default Header
