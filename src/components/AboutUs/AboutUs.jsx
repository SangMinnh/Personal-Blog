import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Main from "../Main/Main"
import "./AboutUs.css"

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
            <a> Midium</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
