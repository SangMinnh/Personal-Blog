import React from "react"
import PropTypes from "prop-types"
import "./Header.css"

Header.propTypes = {}

function Header(props) {
  return (
    <div>
      <div class="header">
        <div class="container">
          <div class="header__wrap">
            <div class="header__logo">Minidum</div>
            <div class="header__menu">
              <div class="header__menu-list">
                <ul class="list__header">
                  <li class="list__header-item run-line">
                    <a href="" class="item__link">
                      HOME
                    </a>
                  </li>
                  <li class="list__header-item run-line">CATEGORIES</li>
                  <li class="list__header-item run-line">ABOUT US</li>
                  <li class="list__header-item run-line">HISTORY</li>
                </ul>
              </div>
              <div class="header__menu-sign">Sign in</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
