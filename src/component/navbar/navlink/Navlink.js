import React from 'react';

import { Link } from 'react-router-dom';
import './Navlink.css';

const Navlink = (props) => (
    <div>
        <Link className='navlink' to={props.link}>{props.children}</Link>
    </div>
)

export default Navlink;