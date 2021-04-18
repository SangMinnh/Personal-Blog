import React from "react"
import PropTypes from "prop-types"
import "./Main.css"
import Main__title_top from "./Main__title/Main__ttitle_top/Main__title_top"
import Main__title_item from "./Main__title/Main__title_item/Main__title_item"

Main.propTypes = {}

function Main(props) {
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="main__wrap">
            <div className="main__title">
              <Main__title_top></Main__title_top>
              <Main__title_item></Main__title_item>
              <Main__title_item></Main__title_item>
              <Main__title_item></Main__title_item>
              <Main__title_item></Main__title_item>
              <div className="title__item">{/* components */}</div>
            </div>
            <div className="main__scroll">
              <Main__title_item></Main__title_item>
              <Main__title_item></Main__title_item>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
