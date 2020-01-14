import React from 'react';

import Navlink from './navlink/Navlink';
import './Navbar.css';

const Navbar = () => (
    <div className='navbar'>
        <Navlink exact link='/'>Home</Navlink>
        <Navlink link='/dataform'>Demo</Navlink>
    </div>
)

export default Navbar;