import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Main from "../Main/Main"
import "./Home.css"

Home.propTypes = {}

function Home(props) {
  return (
    <div className="home">
      <Main></Main>
    </div>
  )
}

export default Home
