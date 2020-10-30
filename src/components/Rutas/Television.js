import React, { Component } from 'react';
import LogoTelevision from './../../assets/images/Television.jpg';

class Television extends Component {
    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>Componente Television</h1>
                <img src={LogoTelevision} />
            </div>
        )
    }
}

export default Television;