import React, { Component } from 'react';
import LogoHome from './../../assets/images/Home.png';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>Componente Home</h1>
                <img src={LogoHome} />
            </div>
        )
    }
}

export default Home;