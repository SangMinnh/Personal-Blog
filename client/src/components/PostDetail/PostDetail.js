import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"
import { useParams, useHistory } from "react-router-dom"
import { getPost, likePost, getPostsBySearch } from "../../actions/posts"
import "./PostDetail.css"
import DotLoading from "../../DotLoading/DotLoading"
import ReactMarkdown from "react-markdown"
import Likes from "./Likes/Likes"

const PostDetail = () => {
  const { post, posts, isLoading } = useSelector(state => state.posts)
  const { id } = useParams()
  const user = JSON.parse(localStorage.getItem("profile"))
  const dispatch = useDispatch()
  const history = useHistory()
  // const post = useSelector(state =>
  //   id ? state.posts.posts.find(message => message._id === id) : null
  // )

  useEffect(() => {
    dispatch(getPost(id))
  }, [id])

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: "none", tags: post?.tags.join(",") }))
    }
  }, [post])

  if (!post) return null

  const openPost = _id => history.push(`/posts/${_id}`)

  const timeRead = Math.floor(Math.random() * 8) + 2

  if (isLoading) {
    return <DotLoading></DotLoading>
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id)

  return (
    <div className="postDetail">
      <div className="content">
        <h1 className="postTitle">{post.title}</h1>
        <div className="postAuthorDetail">
          <div className="postAuthor">
            <div className="avatarr">
              <img
                className="avt"
                src="https://pbs.twimg.com/media/ExJxqV0WEAAII4A.jpg"
                alt=""
              />
              <i class="fa fa-check iconn"></i>
            </div>
            <div className="nameAndTime">
              <div className="authName">{post.name}</div>
              <div className="time">{`${moment(
                post.createdAt
              ).fromNow()}  ·  ${timeRead} mins read`}</div>
            </div>
          </div>
          <div className="postMedia">
            <div className="sm">
              <i
                style={{ color: "#4267B2" }}
                class="fab fa-facebook-square smIcon"
              ></i>
              <div className="countLike">5</div>
            </div>
            <div className="sm">
              <i
                style={{ color: "#15aabf" }}
                class="fab fa-linkedin smIcon"
              ></i>
              <div className="countLike">2</div>
            </div>
            <Likes id={id} user={user}></Likes>
          </div>
        </div>
        <div className="markDown">
          <ReactMarkdown children={post.detail}></ReactMarkdown>
        </div>
      </div>
      <div className="rightSide">
        <div className="toc"></div>
        {!!recommendedPosts.length && (
          <div className="alsoLike">
            <h3 className="labelMayLike">YOU MAY ALSO LIKE</h3>

            <div className="relatedPosts">
              {recommendedPosts.map(
                ({ title, name, message, likes, selectedFile, _id }) => (
                  <div
                    className="relatedPost"
                    onClick={() => openPost(_id)}
                    key={_id}
                  >
                    <div className="imgBg">
                      <img className="imgRelated" src={selectedFile} alt="" />
                    </div>

                    <div className="recommendedTitle">{title}</div>
                  </div>
                )
              )}
            </div>
          </div>
        )}
        <div className=""></div>
      </div>
    </div>
  )
}

export default PostDetail
