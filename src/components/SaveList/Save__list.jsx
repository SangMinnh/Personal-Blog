import React from "react"
import PropTypes from "prop-types"
import "./Save__list.css"
import photo1 from "./photo1.jpg"
Save__list.propTypes = {}

function Save__list(props) {
  return (
    <div className="savelist">
      <div className="container">
        <h3>Save Post</h3>
        <div className="savepost">
          <div className="savepost__info">
            <div className="savepost__info-title">
              <a href="">
                <h4>
                  How to create an Authentication System using JWT and NodeJS
                </h4>
              </a>
            </div>
            <div className="savepost__info-detail">
              <p>
                In this tutorial, you will learn everything about how you can
                use JSON Web Tokens (JWT) in Node.js to authenticate users.
              </p>
            </div>
            <div className="savepost__info-time">
              <span className="author">Min Saint</span>
              <span className="date">Apr 10,2021</span>
              <span className="length">4 mins read</span>
            </div>
          </div>
          <div className="savepost__image">
            <img src={photo1} alt="" />
          </div>
        </div>
        <div className="savepost">
          <div className="savepost__info">
            <div className="savepost__info-title">
              <a href="">
                <h4>
                  How to create an Authentication System using JWT and NodeJS
                </h4>
              </a>
            </div>
            <div className="savepost__info-detail">
              <p>
                In this tutorial, you will learn everything about how you can
                use JSON Web Tokens (JWT) in Node.js to authenticate users.
              </p>
            </div>
            <div className="savepost__info-time">
              <span className="author">Min Saint</span>
              <span className="date">Apr 10,2021</span>
              <span className="length">4 mins read</span>
            </div>
          </div>
          <div className="savepost__image">
            <img
              src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Save__list
