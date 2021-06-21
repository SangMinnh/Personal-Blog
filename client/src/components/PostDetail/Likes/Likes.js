import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Heart from "react-heart"
import { likePost } from "../../../actions/posts"
import "./Likes.css"
const Likes = ({ id, user }) => {
  const dispatch = useDispatch()
  const post = useSelector(state =>
    id ? state.posts.posts.find(message => message._id === id) : null
  )
  const [active, setActive] = useState(() => {
    return post.likes.find(
      like => like === (user?.result?.googleId || user?.result?._id)
    )
  })

  if (post?.likes?.length > 0) {
    return post.likes.find(
      like => like === (user?.result?.googleId || user?.result?._id)
    ) ? (
      <div className="likes">
        <Heart
          style={{ width: "1.3rem" }}
          isActive={active}
          onClick={() => {
            dispatch(likePost(post._id))
            setActive(!active)
          }}
          animationScale={1.2}
          animationTrigger="both"
          animationDuration={0.2}
          className={`customHeart${active ? " active" : ""}`}
        />
        <div className="countLike">
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length}`}
        </div>
      </div>
    ) : (
      <div className="likes">
        <Heart
          style={{ width: "1.3rem" }}
          isActive={active}
          onClick={() => {
            dispatch(likePost(post._id))
            setActive(!active)
          }}
          animationScale={1.2}
          animationTrigger="both"
          animationDuration={0.2}
          className={`customHeart${active ? " active" : ""}`}
        />
        <div className="countLike">{post.likes.length}</div>
      </div>
    )
  }

  return (
    <div className="likes">
      <Heart
        style={{ width: "1.3rem" }}
        isActive={active}
        onClick={() => {
          dispatch(likePost(post._id))
          setActive(!active)
        }}
        animationScale={1.2}
        animationTrigger="both"
        animationDuration={0.2}
        className={`customHeart${active ? " active" : ""}`}
      />
      <div className="countLike">0</div>
    </div>
  )
}

export default Likes
