import React, {Component} from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import {Container} from 'reactstrap';
import PopularProducts from "./PopularProducts";

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>

                <Container fluid>
                    {/*<Button color="link"><Link to="/clients">Clients</Link></Button>*/}
                    <PopularProducts/>
                </Container>
            </div>
        );
    }
}

export default Home;