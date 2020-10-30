import React, { Component } from 'react';
import Numero from './Numero';

class Numeros extends Component {

    state = {
        numeros: [11, 22, 33, 44, 55, 66, 77, 88, 99]
        , suma: 0
    };

    sumarNumero = numeroSeleccionado => {
        this.setState({
            suma: parseInt(numeroSeleccionado) + parseInt(this.state.suma)
        });
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "green" }}>Suma = {this.state.suma}</h1>
                <h2 style={{ color: "blue" }}>Numeros</h2>
                <ul>
                    {
                        this.state.numeros.map((num, index) => {
                            return (<Numero key={index} numero={num} sumarNumero={this.sumarNumero} />);
                        })
                    }
                </ul>
            </div>

        );
    }
}

export default Numeros;