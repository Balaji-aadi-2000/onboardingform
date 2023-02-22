import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className="container">
      <div className="sidebar">
        <img
          src="logo.png"
          alt="logo"
          style={{ position: "relative", top: "0.5rem" }}
        />
        <p>Daway</p>
      </div>
      <div className="search-bar">
      <SearchIcon style={{'position': 'relative','top': '5px' ,'left': '26.5rem','color' : '#9C9FA4'}}/>
      <form className="d-flex" role="search">
         <input className="searchBar form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{'boxShadow' : 'none'}}/>
      </form>
      </div>
      <div className="components">
        <ul className="components-items">
            <Link to='/' style={{'textDecoration':'none'}}><li>PERSONAL INFO</li></Link>
            <Link to='/experience' style={{'textDecoration':'none'}}><li >EXPERIENCE</li></Link>
            <Link to='/skills' style={{'textDecoration':'none'}}><li>SKILLS</li></Link>
            <Link to='/bankdetails' style={{'textDecoration':'none'}}><li>BANK DETAILS</li></Link>
        </ul>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Navbar;
