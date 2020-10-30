import React, { Component } from 'react';

class Numero extends Component {

    seleccionarNumero = () => {
        this.props.sumarNumero(this.props.numero);
        console.log(this.props.numero);
        this.setState({
            seleccionado: this.props.numero
        });
    }

    render() {
        return (
            <button onClick={this.seleccionarNumero}>{this.props.numero}</button>
        );
    }
}

export default Numero;