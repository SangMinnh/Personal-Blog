import React, { useState } from "react";
import {
  CircularProgress,
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation  } from "react-router-dom";
import "./Home.css"
import PostReview from "./PostReview/PostReview"
import Pagination from "../Pagination";
import { getPostsBySearch } from "../../actions/posts";
import Posts from "./Posts/Posts";
import { category } from "../../constants/category";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };



  return (
    <div className="home">
    <div className="leftAndRight">
      <div className="allPost">
      <Posts  className="posts"></Posts>
      <Pagination className="pagination" page={page} isHome={true}/>
      </div>
      
      <div className="right">
        <div className="sidebar">
          <form className="search">
            
            <input
              type="text"
              placeholder="Search..."
              className="searchTxt">
            </input>
            <button type="submit" className="submitBtn">
              <i className="fa fa-search"></i>
            </button>
          </form>
          <div className="categoriesList">
            <h3>CATEGORIES</h3>
            {category?.map(category =>(
                         <div className="categoriesItem">
                         <div className="itemName">{category.categoryName}</div>
                         <div className="count">{category.count}</div>
                       </div>))}
           
           
          </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Home
