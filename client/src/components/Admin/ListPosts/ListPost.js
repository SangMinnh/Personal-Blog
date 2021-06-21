import React from "react"
import { Grid, CircularProgress } from "@material-ui/core"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Row from "../Row/Row"
import DotLoading from "../../../DotLoading/DotLoading"
import "./ListPosts.css"
//import useStyles from "./styles";

const ListPosts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector(state => state.posts)
  // const classes = useStyles();

  if (!posts.length && !isLoading)
    return (
      <div className="noPost">
        <div className="noToShow">No Post to show.</div>
        <Link to="/admin/edit">Add New Post</Link>
      </div>
    )

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
    <DotLoading></DotLoading>
  ) : (
    <div>
      {posts?.map(post => (
        <Row post={post} setCurrentId={setCurrentId} key={post._id} />
      ))}
    </div>
  )
}

export default ListPosts
