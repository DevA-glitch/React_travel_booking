import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/login`);
  }
    return (
<div className="navbar">
    <div className="navContainer">
        <span className="logo">Dave_Booking</span>
        <div className="navItems">
            <button onClick={handleSearch} className="newButton">login</button>
        </div>
    </div>
</div>
    
        )
}

export default Navbar;