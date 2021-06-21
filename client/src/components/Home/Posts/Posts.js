import React from "react"
import { Grid, CircularProgress } from "@material-ui/core"
import { useSelector } from "react-redux"
import PostReview from "../PostReview/PostReview"
import ReviewSkeleton from "../PostReview/ReviewSkeleton"
//import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector(state => state.posts)
  // const classes = useStyles();

  if (!posts.length && !isLoading) return "No posts"

  // return (
  //   <div className="posts">
  //     <ReviewSkeleton />
  //     <ReviewSkeleton />
  //     <ReviewSkeleton />
  //     <ReviewSkeleton />
  //     <ReviewSkeleton />
  //     <ReviewSkeleton />
  //     <ReviewSkeleton />
  //   </div>
  // )

  return isLoading ? (
    <div className="posts">
      <ReviewSkeleton />
      <ReviewSkeleton />
      <ReviewSkeleton />
      <ReviewSkeleton />
      <ReviewSkeleton />
      <ReviewSkeleton />
      <ReviewSkeleton />
    </div>
  ) : (
    <div className="posts">
      {posts?.map(post => (
        <PostReview post={post} key={post._id} />
      ))}
    </div>
  )
}

export default Posts
