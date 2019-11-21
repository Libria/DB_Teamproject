import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        visibility: 'hidden'
    };

    return (
        <div className="Menu">
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink to="/Seatbook" activeStyle={activeStyle}>Seatbook</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;