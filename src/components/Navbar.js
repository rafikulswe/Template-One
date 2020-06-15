import React from 'react';
import '../assets/CustomStyle.scss';
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
        <Link className="menu-item" to="/">Home</Link>
        <Link className="menu-item" to="/about">About Us</Link>
        <Link className="menu-item" to="/policy">Policy</Link>
    </div>
  );
}