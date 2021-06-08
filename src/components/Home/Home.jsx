import React, { useEffect, useState } from "react"
import "./Home.css"
import PostReview from "./Post/PostReview"

const Home = () => {
  return (
    <div className="home">
      <div className="posts">
        <PostReview></PostReview>
        <PostReview></PostReview>
        <PostReview></PostReview>
        <PostReview></PostReview>
        <PostReview></PostReview>
        <PostReview></PostReview>
        <PostReview></PostReview>
      </div>
      <div className="right">
        <div className="sidebar">
          <form className="search">
            <input
              type="text"
              placeholder="Search..."
              className="searchTxt"
            ></input>
            <button type="submit" className="submitBtn">
              <i className="fa fa-search"></i>
            </button>
          </form>
          <div className="categoriesList">
            <h3>CATEGORIES</h3>
            <div className="categoriesItem">
              <div className="itemName">Javascript</div>
              <div className="count">13</div>
            </div>
            <div className="categoriesItem">
              <div className="itemName">Javascript</div>
              <div className="count">13</div>
            </div>
            <div className="categoriesItem">
              <div className="itemName">Javascript</div>
              <div className="count">53</div>
            </div>
            <div className="categoriesItem">
              <div className="itemName">Javascript</div>
              <div className="count">13</div>
            </div>
            <div className="categoriesItem">
              <div className="itemName">Javascript</div>
              <div className="count">13</div>
            </div>
            <div className="categoriesItem">
              <div className="itemName">Javascript</div>
              <div className="count">13</div>
            </div>
            <div className="categoriesItem">
              <div className="itemName">Javascript</div>
              <div className="count">13</div>
            </div>
            <div className="categoriesItem">
              <div className="itemName">Javascript</div>
              <div className="count">13</div>
            </div>
            <div className="categoriesItem">
              <div className="itemName">Javascript</div>
              <div className="count">13</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
