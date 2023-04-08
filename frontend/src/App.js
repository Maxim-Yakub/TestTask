// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import logo from './logo.svg';
import './App.css';
import React from "react";
class App extends React.Component {
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

export default App;
