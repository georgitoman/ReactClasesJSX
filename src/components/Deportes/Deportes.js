import React, { Component } from 'react';
import Deporte from './Deporte';

class Deportes extends Component {

    state = {
        deportes: ["Padel", "Curling", "Petanca", "Tenis", "Futbol"]
        , nombre: "Alumno React"
        , seleccionado: ""
    };

    seleccionarFavorito = deportefavorito => {
        console.log("Favorito: " + deportefavorito);
        this.setState({
            seleccionado: deportefavorito
        });
    }

    contador = 1;
    nuevoDeporte = () => {
        var deportes = this.state.deportes;
        deportes.push("Deporte " + this.contador);
        this.contador++;
        this.setState({
            deportes: deportes
        });
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "fuchsia" }}>
                    {this.state.seleccionado}
                </h1>
                <button onClick={this.nuevoDeporte}>
                    Crear nuevo deporte
                </button>
                <h2>Deportes de {this.state.nombre}</h2>
                <ul>
                    {
                        this.state.deportes.map((depor, index) => {
                            return (<Deporte key={index}
                                deporte={depor}
                                seleccionarFavorito={this.seleccionarFavorito} />);
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Deportes;