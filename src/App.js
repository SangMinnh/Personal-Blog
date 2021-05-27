import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom"
import AboutUs from "./components/AboutUs/AboutUs"
import Home from "./components/Home/Home"
import History from "./components/History/History"
import Signin from "./components/Sign in/Signin"
import Footer from "./components/Footer/Footer"
import Post from "./components/Post/Post"
import Save__list from "./components/SaveList/Save__list"
import CreatePost from "./components/CreatePost/CreatePost"
function App(props) {
  const user = [
    {
      id: 1,
      Email: "lehollo09112000@gmail.com",
      password: "trephepr5",
      name: "Le Hoang Thien"
    },
    {
      id: 2,
      Email: "sangduong@gmail.com",
      password: "1",
      name: "Duong Minh Sang"
    }
  ]

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route path="/history" component={Save__list} />
          <Route path="/posts/:id">
            <Post></Post>
          </Route>
          <Route path="/cate">
            <CreatePost></CreatePost>
          </Route>
          {/* <Route path="/signin" component={Signin} /> */}
          <Route path="/">
            <Signin user={user} />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  )
}
export default App
