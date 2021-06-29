import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import moment from "moment"
import "./PostReview.css"

const PostReview = ({ post }) => {
  const history = useHistory()
  const openPost = e => {
    // dispatch(getPost(post._id, history));

    history.push(`/posts/${post._id}`)
  }

  return (
    <div className="postReview">
      <Link className="background" to={`/posts/${post._id}`}>
        <img
          className="zoom_image"
          src={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          alt=""
        ></img>
      </Link>

      <div className="content">
        <div className="topContent">
          <div className="category">{`React JS | ${moment(
            post.createdAt
          ).fromNow()}`}</div>
          <div className="wrapTitle">
            <Link to={`/posts/${post._id}`} className="title">
              {post.title}
            </Link>
          </div>

          <div className="opening">{post.opening}</div>
        </div>

        <div className="more">
          <Link className="readMore" to={`/posts/${post._id}`}>
            {`Read more `}
          </Link>
          {`·  10 mins read`}
        </div>
      </div>
    </div>
  )
}

export default PostReview
