import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"

import Auth from "./components/Auth/Auth"
import Admin from "./components/Admin/Admin"
import EditPost from "./components/Admin/EditPost/EditPost"
import AboutUs from "./components/AboutUs/AboutUs"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer"
import Save__list from "./components/SaveList/Save__list"
import PostDetail from "./components/PostDetail/PostDetail"

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"))

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          {/* Blog Home */}
          <Route path="/" exact component={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={Home} />

          {/* About and History */}
          <Route exact path="/about" component={AboutUs} />
          <Route path="/history" component={Save__list} />

          {/* Read Post */}
          <Route path="/posts/:id" exact component={PostDetail} />

          {/* Authentication */}
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/home" />)}
          />

          {/* Show all User's Post */}
          <Route
            path="/admin"
            exact
            component={() => (user ? <Admin /> : <Redirect to="/home" />)}
          />

          {/* Create new Post */}
          <Route
            path="/admin/edit"
            exact
            component={() => (user ? <EditPost /> : <Redirect to="/home" />)}
          />

          {/* Edit a Post */}
          <Route
            path="/admin/edit/:id"
            exact
            component={() => (user ? <EditPost /> : <Redirect to="/home" />)}
          />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  )
}
export default App
