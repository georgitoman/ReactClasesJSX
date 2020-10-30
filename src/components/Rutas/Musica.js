import React, { Component } from 'react';
import LogoMusica from './../../assets/images/Musica.png';

class Musica extends Component {
    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>Componente Musica</h1>
                <img src={LogoMusica} />
            </div>
        )
    }
}

export default Musica;