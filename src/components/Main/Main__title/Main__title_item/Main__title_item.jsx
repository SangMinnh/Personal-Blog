import React from "react"
import PropTypes from "prop-types"
import "./Main__title_item.css"

Main__title_item.propTypes = {}

function Main__title_item(props) {
  return (
    <div class="title__item">
      <div class="title__item-wrap">
        <div class="title__item-background">
          <img
            src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/157250530_2807786612768070_3203283049516010977_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pkWDL0bXJkQAX8ae8sM&_nc_ht=scontent.fsgn4-1.fna&oh=99990c2fb36f75f5b64ed631e61d24af&oe=609E674E"
            alt=""
          />
        </div>
        <div class="title__item-info">
          <div class="info__date">React JS | 10 Feb 2021</div>
          <div class="info__title">Top NodeJS Frameworks to use in 2021</div>
          <div class="info__readmore">Read more | 10 mins read</div>
        </div>
      </div>
    </div>
  )
}

export default Main__title_item
