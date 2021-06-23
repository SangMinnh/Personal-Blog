import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import * as actionType from "../../constants/actionTypes";

import "./Header.css"
import { category } from "../../constants/category";


const Header = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div class="header">
      <div class="container">
        <div class="header__wrap">
          <div className="leftHeader">
            <div class="header__logo main-logo">
              <Link to="/">minidum</Link>
            </div>
            <div class="header__menu">
              <div class="header__menu-list">
                <ul class="list__header">
                  <li class="list__header-item">
                    <Link to="/" class="item__link">
                      HOME
                    </Link>
                  </li>
                  <li class="list__header-item">
                    <Link to="/cate" class="item__link">
                      CATEGORIES
                     
                    </Link>
                    
                    <ul class="dropdown__list">
                      {category?.map(category =>(
                        <li class="dropdown__item">
                <span class="dropdown__text">{category.categoryName}</span>
              </li>))}             
            </ul>
                  </li>
                  <li class="list__header-item">
                    <Link to="/about" class="item__link">
                      ABOUT US
                    </Link>
                  </li>
                  {/* <li class="list__header-item run-line">
                  <Link to="/history" class="item__link">
                    HISTORY
                  </Link>
                </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div class="auth">
          {user?.result ? (
          <div className="profile">
            <Avatar
              className="purple"
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <div className="userName">
              {user?.result.name}
            </div>
            <div className="icon">
            <i class="far fa-bookmark big"></i>
            <i class="far fa-bell big"></i>
            <i class="fas fa-sort-down big" style={{ paddingBottom: "8px" }}>
            <ul class="dropdownList">
              <Link class="dropdownItem" onClick={()=> (history.push("/admin"))}>
                <span class="dropdownText">Content</span>
                <i class="fa fa-edit small"></i>
              </Link>
              <Link class="dropdownItem" onClick={logout}>
                <span class="dropdownText">Logout</span>
                <i class="fas fa-sign-out-alt small" ></i>
              </Link>              
            </ul>
            </i>
            {/* <i class="fas fa-sign-out-alt" onClick={logout}></i> */}
            </div>
            {/* <Button
              variant="contained"
              className="logout"
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button> */}
          </div>
        ) : (
          <Link className="signIn" onClick={()=> (history.push("/auth"))}>Sign In</Link>
        )}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
