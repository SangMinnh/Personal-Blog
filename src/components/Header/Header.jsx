import React from "react"
import PropTypes from "prop-types"
import "./Header.css"
import Main from "../Main/Main"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import AboutUs from "../AboutUs/AboutUs"

Header.propTypes = {}

function Header(props) {
  return (
    <div>
      <div class="header">
        <div class="container">
          <div class="header__wrap">
            <div class="header__logo">
              <a>Minidum</a>
            </div>
            <div class="header__menu">
              <div class="header__menu-list">
                <ul class="list__header">
                  <li class="list__header-item run-line">
                    <Link to="/" class="item__link">
                      HOME
                    </Link>
                  </li>
                  <li class="list__header-item run-line">
                    <a href="" class="item__link">
                      CATEGORIES
                    </a>
                  </li>
                  <li class="list__header-item run-line">
                    <Link to="/about" class="item__link">
                      ABOUT US
                    </Link>
                  </li>
                  <li class="list__header-item run-line">
                    <Link to="/history" class="item__link">
                      HISTORY
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="header__menu-sign">
                <a href="">Sign in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
