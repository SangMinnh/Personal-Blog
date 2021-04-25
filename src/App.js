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
function App(props) {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/history" component={History} />
      </Switch>
    </Router>
  )
}
export default App
