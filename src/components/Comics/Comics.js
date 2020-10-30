import React, { Component } from 'react';
import Comic from './Comic';
import './Comics.css';

class Comics extends Component {
    state = {
        comics: [
            {
                titulo: "Spiderman",
                imagen:
                    "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                descripcion: "Hombre araña"
            },
            {
                titulo: "Wolverine",
                imagen:
                    "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                descripcion: "Lobezno"
            },
            {
                titulo: "Guardianes de la Galaxia",
                imagen:
                    "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
                descripcion: "Yo soy Groot"
            },
            {
                titulo: "Avengers",
                imagen:
                    "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                descripcion: "Los Vengadores"
            },
            {
                titulo: "Spawn",
                imagen:
                    "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                descripcion: "Al Simmons"
            },
            {
                titulo: "Batman",
                imagen:
                    "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                descripcion: "Murcielago"
            }
        ]
        , favorito: null
    }

    seleccionarFavorito = comic => {
        this.setState({
            favorito: comic
        });
    }

    crearComic = () => {
        var titulo = document.getElementById("cajatitulo").value;
        var imagen = document.getElementById("cajaimagen").value;
        var descripcion = document.getElementById("cajadescripcion").value;

        var comic = {
            titulo: titulo,
            imagen: imagen,
            descripcion: descripcion
        };

        var comics = this.state.comics;
        comics.push(comic);
        this.setState({
            comics: comics
        });
    }

    eliminarComic = (index) => {
        var comics = this.state.comics;
        comics.splice(index, 1);
        this.setState({
            comics: comics, favorito: null
        });
    }

    updateComic = (index) => {
        var titulo = document.getElementById("cajatitulo").value;
        var imagen = document.getElementById("cajaimagen").value;
        var descripcion = document.getElementById("cajadescripcion").value;

        var comics = this.state.comics;
        var comic = comics[index];
        comic.titulo = titulo;
        comic.imagen = imagen;
        comic.descripcion = descripcion;

        this.setState({
            comics: comics
        });
    }

    render() {
        return (
            <div style={{ margin: "auto", textAlign: "center" }}>
                <label>Titulo: </label>
                <input type="text" id="cajatitulo" /><br />
                <label>Imagen </label>
                <input type="text" id="cajaimagen" /><br />
                <label>Descripcion: </label>
                <input type="text" id="cajadescripcion" /><br />
                <button onClick={this.crearComic}>
                    Nuevo comic
                </button>

                {this.state.favorito &&
                    (<React.Fragment>
                        <div style={{ backgroundColor: "lightgreen" }}>
                            <h1 style={{ color: "blue" }}>
                                {this.state.favorito.titulo}
                            </h1>
                            <img src={this.state.favorito.imagen} />
                        </div>
                    </React.Fragment>)
                }
                {this.state.comics.map((comic, index) => {
                    return (
                        <React.Fragment>
                            <Comic comic={comic}
                                index={index}
                                key={index}
                                seleccionarFavorito={this.seleccionarFavorito}
                                eliminarComic={this.eliminarComic} />
                            <button key={index} style={{ backgroundColor: "blue", color: "white" }}
                                onClick={() => {
                                    this.updateComic(index);
                                }}>Modificar Comic</button>
                        </React.Fragment>
                    )
                }
                )}
            </div>
        );
    }
}

export default Comics;