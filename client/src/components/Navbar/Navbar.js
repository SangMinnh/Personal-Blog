import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div class="logo">
        <Link to="/">Minidum</Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <div class="signButton">
          <Link to="/signin">SIGN IN</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
