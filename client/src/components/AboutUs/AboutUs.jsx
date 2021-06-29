import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Main from "../Main/Main"
import "./AboutUs.css"
import { Link } from "react-router-dom"

AboutUs.propTypes = {}

function AboutUs(props) {
  return (
    <div className="aboutus">
      <div className="container">
        <div className="aboutus__title">
          <h1>About Us</h1>
          <div className="aboutus__title-sub">Read about what we do</div>
        </div>
        <div className="aboutus__detail">
          <div className="aboutus__detail-content">
            <p>
              We are the Styled Themes – providing you free and premium themes
              to cater to your needs of quick website development.
            </p>
            <p>
              We have provided over 18 themes for your portfolio sites,
              corporate sites, eCommerce sites, magazine sites, personal and
              professional blogging sites. Our development team has created
              themes that are multipurpose and packed with latest features.
            </p>
            <p>
              When you are in need for support, we have always been there and we
              surely will reach you through our support forums and emails.
            </p>
            <p>
              We have also contributed our free themes to the free WordPress
              community and we provide our support for the free themes as well.
            </p>
            <p>
              So, who are we? We are the team who develops and provides you
              innovative ideas about WordPress themes to help you make a
              noticeable online presence of your business, corporate or
              individual persona.
            </p>
            <p>
              Our free and pro WordPress themes combined have powered over
              300,000 websites and have been able to keep our customers happy
              with our support.
            </p>
            <p>
              If you are looking forward towards a prospering business through
              your WordPress site, we are the ones you are looking for. Get the
              premium themes from us and create your alluring website with
              enticing features.
            </p>
          </div>
          <div className="aboutus__detail-logo">
            <Link to="/"> Midium</Link>
          </div>
          <div className="aboutus__detail-team">
            <div>
              <h1>Our Team Members</h1>
            </div>
            <div className="info__wrap">
              <span className="team__info">
                <div className="team__info-top">
                  <img
                    src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/149674251_1363578030657063_2034525896621307831_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OIiZWVQVRaIAX_Rvfw5&_nc_ht=scontent-sin6-1.xx&oh=ddd4e1b17949e66462a49cdfa67061d2&oe=60AA47E3"
                    alt=""
                    className="zoom_image"
                  />
                </div>
                <div className="team__info-bottom">
                  <span>
                    <strong>LE HOANG THIEN</strong>
                  </span>
                  <br />
                  <span>THIRD YEAR STUDENT AT UIT-HCM</span>
                  <p>
                    <strong>Hobbies:</strong>
                    Board game, studying new technology, create web app,
                    listening to music and hanging out
                  </p>
                  <div className="bottom__contact">
                    <span>
                      <i className="fa fa-phone"></i>
                    </span>
                    <strong>0847766839</strong>
                    <br />
                    <span>
                      <i className="fa fa-map-marker"></i>
                    </span>
                    <strong>Tan Phu, HCM City</strong>
                  </div>
                </div>
              </span>
              <span className="team__info">
                <div className="team__info-top">
                  <img
                    src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-0/s526x395/165479798_1691525181055719_6423088316078538507_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=hFl5oShbVD8AX9phrHf&_nc_ht=scontent.fsgn5-2.fna&tp=7&oh=b608b0fc5a9c71e95214f004a3b39620&oe=60AAA263"
                    alt=""
                    className="zoom_image"
                  />
                </div>
                <div className="team__info-bottom">
                  <span>
                    <strong>DUONG MINH SANG</strong>
                  </span>
                  <br />
                  <span>THIRD YEAR STUDENT AT UIT-HCM</span>
                  <p>
                    <strong>Hobbies:</strong>
                    Board game, studying new technology, create web app,
                    listening to music and hanging out
                  </p>
                  <div className="bottom__contact">
                    <span>
                      <i className="fa fa-phone"></i>
                    </span>
                    <strong>0942850506</strong>
                    <br />
                    <span>
                      <i className="fa fa-map-marker"></i>
                    </span>
                    <strong>KTX B, THU DUC DISTRICT,HCM CITY</strong>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
