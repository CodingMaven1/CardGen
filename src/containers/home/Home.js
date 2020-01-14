import React, {Component} from 'react';

import Card from '../../component/card/Card';
import './Home.css';

class Home extends Component {
    state = {
        dataForm : {}
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const dataForm = {};

        for(let i of query.entries()){
            dataForm[i[0]] = i[1]; 
        }

        this.setState({ dataForm: dataForm});
        console.log(dataForm)
    }



    render(){

        const card = <Card name={this.state.dataForm['name']} 
                           city={this.state.dataForm['city']} 
                           zipcode={this.state.dataForm['zipcode']}
                           email = {this.state.dataForm['email']}
                           message={this.state.dataForm['message']} />


        return(
            <div className='home'>
            <div className='row'>
                {card}
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
    };
}

export default Home;