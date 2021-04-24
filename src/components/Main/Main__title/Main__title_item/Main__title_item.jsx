import React from "react"
import PropTypes from "prop-types"
import "./Main__title_item.css"

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
          <img className="zoom_image" alt="" src={title__item.imageUrl}></img>
        </div>
        <div className="title__item-info">
          <div className="info__date">React JS | 10 Feb 2021</div>
          <div className="info__title">{title__item.title}</div>
          <div className="info__readmore">
            <a href="">Read more | 10 mins read</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main__title_item
