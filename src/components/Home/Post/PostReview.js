import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./PostReview.css"

const PostReview = () => {
  return (
    <div className="postReview">
      <div className="background">
        <Link to="/post">
          <img
            className="zoom_image"
            src={
              "https://www.goccuachung.com/content/images/size/w960/2021/05/amp-stories.jpg"
            }
            alt=""
          ></img>
        </Link>
      </div>
      <div className="content">
        <div className="topContent">
          <div className="category">React JS | 10 Feb 2021</div>
          <div className="wrapTitle">
            <Link to="/post" className="title">
              Top NodeJS Frameworks to use in 2021
            </Link>
          </div>

          <div className="opening">
            I have lost a lot of other people’s money. The most stressful times
            in my life have been when people believed in me and invested tens
            (if not hundreds) of millions in my company or idea, only to see
            their capital go up in smoke. I’ve also made a lot of people a lot
            of money — but only in America would someone with my (lack of)
            pedigree be given this many swings at the plate.
          </div>
        </div>

        <div className="more">
          <Link className="readMore" to="/post">
            {`Read more `}
          </Link>
          {`·  10 mins read`}
        </div>
      </div>
    </div>
  )
}

export default PostReview
