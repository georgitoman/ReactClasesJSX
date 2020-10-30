import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <ul style={{ display: "inline" }}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/Cine">Cine</a>
                    </li>
                    <li>
                        <a href="/Television">Television</a>
                    </li>
                    <li>
                        <a href="/Musica">Musica</a>
                    </li>
                </ul>
            </div>
        )
    }
}
