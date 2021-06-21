import React from "react"
import PropTypes from "prop-types"
import "./PopularPost.css"
import PostList__Item from "./PostList__Item/PostList__Item"

PopularPost.propTypes = {}

function PopularPost(props) {
  return (
    <div className="main__scroll-post">
      <h3>POPULAR POST</h3>
      <ul className="post__list">
        <li className="post__list-item">
          <PostList__Item></PostList__Item>
        </li>
        <li className="post__list-item">
          <PostList__Item></PostList__Item>
        </li>
      </ul>
    </div>
  )
}

export default PopularPost
