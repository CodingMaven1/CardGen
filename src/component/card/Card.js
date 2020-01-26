import React from 'react';

import './Card.css';

const Card = (props) => (
    <div className='card'>
        <div className='card--front'>
            <h1 className='card--heading'>{props.name}</h1>
            <h1 className='card--heading'>{props.message}</h1>
        </div>
        <div className='card--back card--headingBack'>
            <h1 className='card--heading'>{props.city}</h1>
            <h1 className='card--heading'>{props.zipcode}</h1>
            <h1 className='card--heading'>{props.email}</h1>
        </div>
    </div>
)

export default Card;