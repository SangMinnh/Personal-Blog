import React from "react"
import PropTypes from "prop-types"
import "./Footer.css"
import { Link } from "react-router-dom"

Footer.propTypes = {}

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="footer__left">
            <div className="footer__left-top main-logo">
              <Link to="/">minidum</Link>
              <div>Top Front-End Blog for Developer</div>
            </div>
            <div className="footer__left-bottom">
              Copyright © 2020 - 2021 Minidum.com • All Rights Reserved
            </div>
          </div>
          <div className="footer__mid"></div>
          <div className="footer__right">
            <div className="footer__right-top">
              <span>FOLLOW US</span>
            </div>
            <div className="footer__right-bottom">
              <ul className="icon__list">
                <li className="icon__list-item">
                  <a href="">
                    <i class="fab fa-instagram"></i>
                    <div className="footer__icon-popup">
                      <span>Instagram</span>
                    </div>
                  </a>
                </li>
                <li className="icon__list-item">
                  <a href="">
                    <i className="fab fa-facebook"></i>
                    <div className="footer__icon-popup">
                      <span>Facebook</span>
                    </div>
                  </a>
                </li>
                <li className="icon__list-item">
                  <a href="">
                    <i className="fab fa-youtube"></i>
                    <div className="footer__icon-popup">
                      <span>Youtube</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
