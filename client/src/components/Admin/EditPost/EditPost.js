import React, { useState, useEffect } from "react"
import { TextField, Button, Typography, Paper } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import FileBase from "react-file-base64"
import { useParams, useHistory } from "react-router-dom"
import ChipInput from "material-ui-chip-input"
import Yamde from "yamde"
import MDEditor from "@uiw/react-md-editor"

import "./EditPost.css"
import { createPost, updatePost } from "../../../actions/posts"
import { getPost } from "../../../actions/posts"
const EditPost = ({ postId }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  const post = useSelector(state =>
    id ? state.posts.posts.find(message => message._id === id) : null
  )

  const [postData, setPostData] = useState(() => {
    return post
      ? post
      : {
          title: "",
          opening: "",
          tags: [],
          selectedFile: ""
        }
  })

  const [postDetail, setPostDetail] = useState(() => {
    return post ? post.detail : ""
  })

  const user = JSON.parse(localStorage.getItem("profile"))

  const handleAddChip = tag => {
    setPostData({ ...postData, tags: [...postData.tags, tag] })
  }

  const handleDeleteChip = chipToDelete => {
    setPostData({
      ...postData,
      tags: postData.tags.filter(tag => tag !== chipToDelete)
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!id) {
      dispatch(
        createPost(
          { ...postData, name: user?.result?.name, detail: postDetail },
          history
        )
      )
    } else {
      dispatch(
        updatePost(
          id,
          { ...postData, name: user?.result?.name, detail: postDetail },
          history
        )
      )
    }
  }

  return (
    <div className="editPost">
      <form
        autoComplete="off"
        noValidate
        className="form"
        onSubmit={handleSubmit}
      >
        <div className="control">
          {/* <div className="deletePost">Delete</div> */}
          <div className="label">
            <div className="addIconBox">
              <i class="fas fa-feather-alt"></i>
            </div>
            <div className="contentLabel">
              {" "}
              {post ? "Edit Post" : "Add Post"}
            </div>
          </div>
          <button type="submit" className="submitPost">
            {post ? "Publish Changes" : "Publish"}
          </button>
        </div>
        <div className="txtField">
          <div className="label">Blog Title</div>
          <input
            className="input"
            type="text"
            value={postData.title}
            onChange={e => setPostData({ ...postData, title: e.target.value })}
            name="name"
            required
          />
        </div>

        <div className="txtField">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className="chip">
          <ChipInput
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onAdd={chip => handleAddChip(chip)}
            onDelete={chip => handleDeleteChip(chip)}
          />
        </div>
        <div className="txtField">
          <TextField
            name="opening"
            variant="outlined"
            label="Opening"
            fullWidth
            multiline
            rows={4}
            value={postData.opening}
            onChange={e =>
              setPostData({ ...postData, opening: e.target.value })
            }
          />
        </div>

        <div className="txtField">
          <Yamde
            className="detail"
            value={postDetail}
            handler={setPostDetail}
          />
          {/* <MDEditor
            textareaProps={{
              placeholder: "Please enter Markdown text"
            }}
            height={500}
            value={postDetail}
            onChange={setPostDetail}
          /> */}
        </div>

        {/* <div style={{ padding: "5px 0", width: "94%" }}>
          <ChipInput
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div> */}
      </form>
    </div>
  )
}

export default EditPost
