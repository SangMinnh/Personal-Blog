import React from "react"
import PropTypes from "prop-types"
import "./Main__title_item.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

Main__title_item.propTypes = {
  title__item: PropTypes.object
}
Main__title_item.defaultProps = {
  title__item: null
}

function Main__title_item(props) {
  const { title__item } = props
  return (
    <div className="title__item">
      <div className="title__item-wrap">
        <div className="title__item-background ">
          <Link to={`/posts/${title__item.id}`} class="item__link">
            <img className="zoom_image" alt="" src={title__item.url}></img>
          </Link>
        </div>
        <div className="title__item-info">
          <div className="info__date">React JS | 10 Feb 2021</div>
          <div className="info__title">{title__item.title}</div>
          <div className="info__readmore">
            <Link to={`/posts/${title__item.id}`}>
              Read more | 10 mins read
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main__title_item
