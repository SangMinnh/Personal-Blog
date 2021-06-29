import React, { useState } from "react"

import { DataGrid } from "@material-ui/data-grid"
import { Link, useParams, useHistory, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"
import "./Admin.css"
import Row from "./Row/Row"
import ListPosts from "./ListPosts/ListPost"
import Pagination from "../Pagination"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Admin = () => {
  const [currentId, setCurrentId] = useState(0)

  const query = useQuery()
  const page = query.get("page") || 1
  const user = JSON.parse(localStorage.getItem("profile"))
  const history = useHistory()

  return (
    <div className="admin">
      <div className="control">
        {/* <div className="deletePost">Delete</div> */}
        <div className="label">
          <div className="addIconBox">
            <i class="fas fa-feather-alt"></i>
          </div>
          <div className="contentLabel">Content</div>
        </div>
        <Link to="/admin/edit" className="addPost">
          Add Post
        </Link>
      </div>
      <div className="myPosts">
        <div className="prop">
          <div className="prop1">_id</div>
          <div className="prop2">Title</div>
          <div className="prop3">Updated</div>
          <div className="prop4">Author</div>
          <div className="prop5"></div>
        </div>
        <ListPosts setCurrentId={setCurrentId} />
        <div className="page">
          <Pagination className="pagination" page={page} isHome={false} />
        </div>
      </div>
      {/* <DataGrid
        rows={rowss}
        columns={columns}
        //checkboxSelection
        autoPageSize={true}
        disableMultipleSelection={true}
        onRowClick={e => editPost(e.id)}
        //loading={isLoading}
      /> */}
    </div>
  )
}

export default Admin
