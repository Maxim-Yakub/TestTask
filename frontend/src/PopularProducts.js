import React, { Component } from 'react';
import logo from "./logo.svg";

class PopularProducts extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        const response = await fetch('/api/products/popular');
        const body = await response.json();
        this.setState({products: body});
    }

    render() {
        const {products} = this.state;
        return (
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
        );
    }
}
export default PopularProducts;