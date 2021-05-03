import React from "react"
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
//

Post.propTypes = {}

function Post(props) {
  function scrollToTop() {
    scroll.scrollToTop()
  }
  return (
    <div>
      <div className="post">
        <div className="container">
          <div className="post__wrap">
            <div className="post__info">
              <div className="post__title">
                <h2>Getting Started With TypeScript</h2>
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
                    <div className="name">Min Saint</div>
                    <span>10 Apr 2021 · 4 min read</span>
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
                <div className="introduce">
                  A modal is a window that appears on top of a parent screen.
                  It’s called ‘modal’ because it creates a mode that disables
                  the parent screen but keeps it visible. Users must interact
                  with the modal to return to the main screen.
                </div>
                <div className="introduce">
                  A modal is a window that appears on top of a parent screen.
                  It’s called ‘modal’ because it creates a mode that disables
                  the parent screen but keeps it visible. Users must interact
                  with the modal to return to the main screen.
                </div>
                <div className="introduce">
                  In this article, I want to review a few simple rules on how to
                  design better modal windows.
                </div>
                <div id="test1">
                  <div className="index">1. What is Figma?</div>
                  <div className="introduce">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas nam velit exercitationem dolorum tempora, doloremque
                    eaque dolor debitis perferendis. Quae nihil, recusandae quam
                    officia cupiditate atque consequuntur placeat soluta
                    facilis.
                  </div>
                  <div className="introduce">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas nam velit exercitationem dolorum tempora, doloremque
                    eaque dolor debitis perferendis. Quae nihil, recusandae quam
                    officia cupiditate atque consequuntur placeat soluta
                    facilis.
                  </div>
                  <div className="introduce">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas nam velit exercitationem dolorum tempora, doloremque
                    eaque dolor debitis perferendis. Quae nihil, recusandae quam
                    officia cupiditate atque consequuntur placeat soluta
                    facilis.
                  </div>
                  <div className="introduce">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas nam velit exercitationem dolorum tempora, doloremque
                    eaque dolor debitis perferendis. Quae nihil, recusandae quam
                    officia cupiditate atque consequuntur placeat soluta
                    facilis.
                  </div>
                </div>
                <div id="test2">
                  <div className="index">2. Sounds Interesting</div>
                  <div className="introduce">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas nam velit exercitationem dolorum tempora, doloremque
                    eaque dolor debitis perferendis. Quae nihil, recusandae quam
                    officia cupiditate atque consequuntur placeat soluta
                    facilis.
                  </div>
                </div>
                <div id="test3">
                  <div className="index">3. Is It Free?</div>
                  <div className="introduce">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas nam velit exercitationem dolorum tempora, doloremque
                    eaque dolor debitis perferendis. Quae nihil, recusandae quam
                    officia cupiditate atque consequuntur placeat soluta
                    facilis.
                  </div>
                </div>
                <div id="test4">
                  <div className="index">
                    4. Be careful with system-initiated modal windows
                  </div>
                  <div className="introduce">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quas nam velit exercitationem dolorum tempora, doloremque
                    eaque dolor debitis perferendis. Quae nihil, recusandae quam
                    officia cupiditate atque consequuntur placeat soluta
                    facilis.
                  </div>
                </div>
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
                          Lots of don'ts without clear explanation why, I think
                          some of them are status Quo rather then properly
                          reasoned approaches. I don't see why it's bed to use
                          full-screen modals in some cases.
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
              <ul className="fixed navbar" id="mainNav">
                <h2>TABLE OF CONTENT</h2>
                <li>
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
                    className="test2"
                    to="test3"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    3. Is it free?
                  </Link>
                </li>
                <li>
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
