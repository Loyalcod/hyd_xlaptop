import "./navigation_bar.css"
import { Link } from "react-router-dom"

function NavigationBar() {
  return (
    <div className="nav_container">
        <div className="navbar">
            <div className="nav">
                <Link to="/" className="navLink">Home</Link>
            </div>
            <div className="nav">
                <Link to="/" className="navLink"> PC / Tablet</Link>
            </div>
            <div className="nav">
                <Link to="/" className="navLink">Phones</Link>
            </div>
            <div className="nav">
                <Link to="/" className="navLink">About-Us</Link>
            </div>
            <div className="nav">
                <Link to="/" className="navLink">Contact-Us</Link>
            </div>
        </div>
    </div>
  )
}

export default NavigationBar