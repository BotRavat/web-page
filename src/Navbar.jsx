import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="nav-logo">
        <li> <NavLink className='nav-link' to='/'>MRK</NavLink></li>
        </div>
        <div className="menu">
          <ul>
            <li> <NavLink className='nav-link' to='/'>Home</NavLink></li>
            <li> <NavLink className='nav-link' to='/service'>Service</NavLink></li>
            <li> <NavLink className='nav-link' to='/contact'>Contact</NavLink></li>
            <li> <NavLink className='nav-link' to='/about'>About</NavLink></li>
           
          </ul>
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;
