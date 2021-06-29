import React from "react"
import PropTypes from "prop-types"
import "./Rec__item.css"
Rec__item.propTypes = {}

function Rec__item(props) {
  return (
    <div className="recitem">
      <div className="recitem__left">
        <img
          src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="recitem__right">
        <div className="recitem__right-top">
          Inslee announces three counties to rollback to
        </div>
        <div className="recitem__right-bot">Phrase 2</div>
      </div>
    </div>
  )
}

export default Rec__item
