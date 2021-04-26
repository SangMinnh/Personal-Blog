import React from "react"
import PropTypes from "prop-types"
import "./Signin.css"

Signin.propTypes = {}

function Signin(props) {
  return (
    <div className="signin">
      <div className="container">
        <div className="signin__head">
          <h1>Login</h1>
        </div>
        <div className="signin__detail">
          <div className="container">
            <form action="">
              <div className="signin__detail-input">
                <input type="text" placeholder="Email" autoFocus />
              </div>
              <div className="signin__detail-input">
                <input type="text" placeholder="password" />
              </div>
              <div className="signin__detail-button ">
                <a className="btn">Login</a>
              </div>
              <div className="signin__detail-input">
                <span>Don't have an account?</span>
                <a href="" className="run-line">
                  Sign up
                </a>
              </div>
              <div className="signin__detail-input">
                <a href="" className="run-line">
                  I forgot my password
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="signin__action">
          <div className="list-button">
            <div>
              <a className="btn">
                <i className="fab fa-google"></i>
                Login with Google
              </a>
            </div>
            <div>
              <a className="btn">
                <i className="fab fa-github"></i>
                Login with Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
