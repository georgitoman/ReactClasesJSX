import React, { Component } from 'react';

class Comic extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.comic.titulo}</h1>
                <img src={this.props.comic.imagen} />
                <p>{this.props.comic.descripcion}</p>
                <button onClick={() => {
                    this.props.seleccionarFavorito(this.props.comic);
                }}>Comic favorito</button>
                <button onClick={() => {
                    this.props.eliminarComic(this.props.index);
                }}>Eliminar Comic</button>
            </div>
        );
    }
}

export default Comic;