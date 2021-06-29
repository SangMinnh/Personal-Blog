import React, { useEffect } from "react"
import { Link, useParams, useHistory, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deletePost } from "../../../actions/posts"
import "./Row.css"
import moment from "moment"
const Row = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <div
      className="row"
      onClick={e => {
        e.stopPropagation()
        setCurrentId(post._id)
        history.push(`/admin/edit/${post._id}`)
      }}
    >
      <div className="id">{post._id}</div>
      <div className="tit">{post.title}</div>
      <div className="updated">{moment(post.createdAt).fromNow()}</div>
      <div className="author">{post.name}</div>
      <div className="delete">
        <div
          className="deleteBtn"
          onClick={e => {
            e.stopPropagation()
            dispatch(deletePost(post._id))
          }}
        >
          <i class="far fa-trash-alt delete_icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Row
