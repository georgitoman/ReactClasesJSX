import React, { Component } from 'react'

export default class Collatz extends Component {
    state = {
        lista: {}
    }

    calcular = (e) => {
        e.preventDefault();

        var list = {};

        for (var i = parseInt(this.numero.current.value); i != 1;) {
            if (i % 2) {
                i = i / 2;
            } else {
                i = (i * 3) + 1;
            }
            list.push(i);
        }

        this.setState({
            lista: list
        })
    }

    render() {
        return (
            <div>
                <h1>Collatz</h1>
                {this.state.lista && (
                    {
                        this.state.lista.map((numero, index) => {
                            return (
                                <li>{numero}</li>
                            )
                        }
                        )
                    })}

                <form onSubmit={this.calcular}>
                    <label htmlFor="numero">Numero: </label>
                    <input type="number" ref={this.numero} name="numero"
                        onChange={this.calcular} />
                    <br />
                    <button>
                        Calcular Collatz
                    </button>
                </form>
            </div>
        )
    }
}
