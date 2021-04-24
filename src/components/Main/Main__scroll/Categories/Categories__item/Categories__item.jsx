import React from "react"
import PropTypes from "prop-types"
import "./Categories__item.css"

Categories__item.propTypes = {
  item: PropTypes.object
}
Categories__item.defaultProps = {
  item: null
}

function Categories__item(props) {
  const { item } = props
  return (
    <div className="categories__list-item">
      <span>{item.title}</span>
      <div className="item__number">10</div>
    </div>
  )
}

export default Categories__item
