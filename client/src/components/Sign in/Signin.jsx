import React, { useState } from "react"
import PropTypes from "prop-types"
import "./Signin.css"

Signin.propTypes = {
  user: PropTypes.array
}
Signin.defaultProps = {
  user: []
}

function Signin(props) {
  const { user } = props
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [status, setStatus] = useState()

  function handleSubmit() {
    var a = user.find(item => {
      return item.Email == email && item.password == password
    })
    // console.log(a)
    if (a != null) {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }
  if (status != true) {
    return (
      <div className="signin">
        <div className="container">
          <div className="signin__head">
            <h1>Login</h1>
          </div>
          <div className="signin__detail">
            <div className="container">
              <form action="" onSubmit={handleSubmit}>
                <div className="signin__detail-input">
                  <input
                    type="email"
                    placeholder="Email"
                    autoFocus
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="signin__detail-input">
                  <input
                    type="text"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="signin__detail-button ">
                  <button type="submit" className="btn">
                    Login
                  </button>
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
  } else return <div>hello</div>
}

export default Signin
