import React from "react"
import PropTypes from "prop-types"
import "./Main__title_top.css"
import { Link } from "react-router-dom"

Main__title_top.propTypes = {
  title__top_item: PropTypes.object
}
Main__title_top.defaultProps = {
  title__top_item: null
}

function Main__title_top(props) {
  const { title__top_item } = props
  return (
    <div className="title__top">
      <div className="title__top-wrap">
        <div className="title__top-background">
          <Link to="/post">
            <img className="zoom_image" src={title__top_item.url} alt=""></img>
          </Link>
        </div>
        <div className="title__top-info">
          <div className="info__top">
            <div className="info__date">React JS | 10 Feb 2021</div>
            <div className="info__title">
              Top NodeJS Frameworks to use in 2021
            </div>
            <div className="info__detail">{title__top_item.description}</div>
          </div>
          <div className="info__readmore">Read more | 10 mins read</div>
        </div>
      </div>
    </div>
  )
}

export default Main__title_top
