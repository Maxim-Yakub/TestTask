import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import logo from "./logo.svg";

class Catalogue extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        const response = await fetch('/api/products');
        const body = await response.json();
        this.setState({products: body});
    }

    render() {
        const {products} = this.state;
        return (
            <div>
                <AppNavbar/>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div className="App-intro">
                            <h2>Clients</h2>
                            {products.map(product =>
                                <div key={product.id}>
                                    {product.name} ({product.description})
                                </div>
                            )}
                        </div>
                    </header>
                </div>
            </div>

        );
    }
}
export default Catalogue;