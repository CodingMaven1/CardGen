import React from 'react';

import Card from '../../component/card/Card';
import './Home.css';

const Home = (props) => {
    return(
        <div className='home'>
        <div className='row'>
            <Card />
            <Card />
            <Card />
        </div>
        <div className='row'>
            <Card />
            <Card />
            <Card />
        </div>
    </div>
    )
}

export default Home;