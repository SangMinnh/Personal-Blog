import React from "react"
import PropTypes from "prop-types"
import "./PostList__Item.css"

PostList__Item.propTypes = {}

function PostList__Item(props) {
  return (
    <div className="item__post">
      <div className="item__post-wrap">
        <div className="post__order">01</div>
        <div className="post__detail">
          <div className="post__detail-top">
            Inslee announces three counties to rollback to Phase 2
          </div>
          <div className="post__detail-bottom">Apr 10 · 4 min read</div>
        </div>
      </div>
    </div>
  )
}

export default PostList__Item
