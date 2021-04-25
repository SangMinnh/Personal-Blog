import React from "react"
import PropTypes from "prop-types"
import Categories__item from "./Categories__item/Categories__item"
import "./Categories.css"

Categories.propTypes = {
  categoriesList: PropTypes.array
}
Categories.defaultProps = {
  categoriesList: []
}

function Categories(props) {
  const { categoriesList } = props
  return (
    <div className="main__scroll-categories">
      <div className="categories__search">
        <input
          type="text"
          placeholder="Search here ..."
          className="categories__search-item"
        ></input>
        <a href="">
          <i class="fas fa-search"></i>
        </a>
      </div>
      <div className="categories__list">
        <h3>CATEGORIES</h3>
        {categoriesList.map(item => (
          <Categories__item item={item}></Categories__item>
        ))}
      </div>
    </div>
  )
}

export default Categories
