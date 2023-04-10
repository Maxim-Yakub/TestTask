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
                        <div className="App-intro">
                            <h2> ACME inc </h2>
                            {products.map(product =>
                                <div key={product.id}>
                                    {product.name} ({product.description})
                                </div>
                            )}
                        </div>
                </div>
        );
    }
}
export default PopularProducts;