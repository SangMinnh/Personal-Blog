import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Main from "../Main/Main"
import "./Post.css"
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll"
import Rec__item from "./Rec__item/Rec__item"
import useFetch from "../fetch"
import { useParams } from "react-router"
//

// window.onscroll = function () {
//   myFunction()
// }

Post.propTypes = {}

function Post(props) {
  const { id } = useParams()
  function scrollToTop() {
    scroll.scrollToTop()
  }
  const { data: post, pending, error } = useFetch(
    "http://localhost:8000/posts/" + id
  )
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var navbar = document.getElementById("mainNav")
      var h = document.querySelector("body")
      var footer = document.querySelector(".footer")
      if (navbar) {
        if (
          window.pageYOffset >
          h.offsetHeight - footer.offsetHeight - 300 - 500
        ) {
          navbar.classList.add("absolute")
        } else {
          navbar.classList.remove("absolute")
        }
      }
    })
  })
  return (
    <div>
      {post && (
        <div className="post">
          <div className="container">
            <div className="post__wrap">
              <div className="post__info">
                <div className="post__title">
                  <h2>{post.title}</h2>
                </div>
                <div className="post__author">
                  <div className="post__author-info">
                    <div className="post__avatar">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt=""
                      />
                    </div>
                    <div className="info__wrap">
                      <div className="name">{post.author}</div>
                      <span>{post.date} · 4 min read</span>
                    </div>
                  </div>
                  <div className="post__author-share">
                    <ul className="list__share">
                      <li className="list__share-item">
                        <a href="">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list__share-item">
                        <a href="">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li className="list__share-item">
                        <a href="">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="post__detail">
                  {post.body.map(section => {
                    return (
                      <div id={`test${section.id}`}>
                        <div className="index">{section.title}</div>
                        <div className="introduce">{section.detail}</div>
                      </div>
                    )
                  })}
                </div>
                <div className="post__comment">
                  <div className="response">
                    <h3>Response</h3>
                    <div className="response__input">
                      <div className="post__avatar">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                          alt=""
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="What are your thoughts?"
                        className="comment"
                      />
                    </div>
                  </div>

                  <div className="all__response">
                    <h3>All Responses</h3>
                    <div className="response__post">
                      <div className="post__avatar">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                          alt=""
                        />
                      </div>
                      <div className="post__right">
                        <div className="response__post-info">
                          <div className="name">Min Saint</div>
                          <div className="detail">
                            Lots of don'ts without clear explanation why, I
                            think some of them are status Quo rather then
                            properly reasoned approaches. I don't see why it's
                            bed to use full-screen modals in some cases.
                          </div>
                        </div>
                        <div className="response__post-react">
                          <a href="">
                            <i class="fa fa-thumbs-up"></i>
                          </a>
                          <a href="">
                            <i class="fa fa-heart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post__scroll">
                <ul className="navbar " id="mainNav">
                  <h2 className="post__scroll-content">TABLE OF CONTENT</h2>
                  {post.body.map(section => (
                    <li>
                      <Link
                        activeClass="active"
                        className={`test${section.id}`}
                        to={`test${section.id}`}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        {section.title}
                      </Link>
                    </li>
                  ))}
                  {/* <li>
                    <Link
                      activeClass="active"
                      className="test1"
                      to="test1"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      1. Khởi tạo Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test2"
                      to="test2"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      2. Cast Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="test3"
                      to="test3"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      3. Is it free?
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      activeClass="active"
                      className="test"
                      to="test4"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      4. Be careful with system-initiated modal windows
                    </Link>
                  </li> */}
                  <h2 className="post__scroll-rec">YOU MAY ALSO LIKE</h2>
                  <li>
                    <Rec__item></Rec__item>
                    <Rec__item></Rec__item>
                    <Rec__item></Rec__item>
                    <Rec__item></Rec__item>
                    <Rec__item></Rec__item>
                    <Rec__item></Rec__item>
                    <Rec__item></Rec__item>
                    <Rec__item></Rec__item>
                    <Rec__item></Rec__item>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Post
