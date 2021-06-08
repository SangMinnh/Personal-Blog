import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"

import Auth from "./components/Auth/Auth"
import AboutUs from "./components/AboutUs/AboutUs"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header.jsx"
import History from "./components/History/History"
import Signin from "./components/Sign in/Signin"
import Footer from "./components/Footer/Footer"
import Post from "./components/Post/Post"
import Save__list from "./components/SaveList/Save__list"
import CreatePost from "./components/CreatePost/CreatePost"
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"))

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route path="/history" component={Save__list} />
          <Route path="/posts/:id">
            <Post></Post>
          </Route>
          <Route path="/cate">
            <CreatePost></CreatePost>
          </Route>
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/home" />)}
          />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  )
}
export default App
