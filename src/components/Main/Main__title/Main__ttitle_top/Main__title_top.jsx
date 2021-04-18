import React from "react"
import PropTypes from "prop-types"
import "./Main__title_top.css"
import image from "./top.jpg"

Main__title_top.propTypes = {}

function Main__title_top(props) {
  return (
    <div class="title__top">
      <div class="title__top-wrap">
        <div class="title__top-background">
          <img
            src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/157250530_2807786612768070_3203283049516010977_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pkWDL0bXJkQAX8ae8sM&_nc_ht=scontent.fsgn4-1.fna&oh=99990c2fb36f75f5b64ed631e61d24af&oe=609E674E"
            alt=""
          ></img>
        </div>
        <div class="title__top-info">
          <div class="info__top">
            <div class="info__date">React JS | 10 Feb 2021</div>
            <div class="info__title">Top NodeJS Frameworks to use in 2021</div>
            <div class="info__detail">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              sint nesciunt, quas omnis possimus quibusdam pariatur modi
              sapiente praesentium maiores. A, magnam excepturi. Ullam magni
              nihil animi odio! Minus, consequuntur?
            </div>
          </div>
          <div class="info__readmore">Read more | 10 mins read</div>
        </div>
      </div>
    </div>
  )
}

export default Main__title_top
