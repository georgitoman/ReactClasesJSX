import React, { Component } from 'react';
import './PrimeraClase.css';

class PrimeraClase extends Component {
    contador = 1;
    metodoAccion = () => {
        console.log("Contador " + this.contador);
        this.contador++;
    }

    state = { valor: parseInt(this.props.inicio) };
    incrementarEstado = () => {
        this.setState({
            valor: this.state.valor + 1
        });
    }

    render() {
        var numero = 1;

        const hacerAlgo = () => {
            console.log("Haciendo algo...");
            numero++;
        }

        return (
            <React.Fragment>
                <h1 className="rojo">Primer Componente Class</h1>
                <h2 className="azul">
                    Estado: {this.state.valor}
                </h2>
                <button onClick={this.metodoAccion}>
                    Incrementar contador
                </button>
                <button onClick={() => {
                    hacerAlgo();
                    this.incrementarEstado();
                }}>Pulsar</button>
            </React.Fragment>
        )
    }
}

export default PrimeraClase;