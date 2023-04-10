import React, {Component} from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import {Col, Container, Row} from 'reactstrap';
import PopularProducts from "./PopularProducts";

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '20vh',
                        }}
                    >
                        <h2>ACME Inc</h2>
                    </div>
                    {/*<Button color="link"><Link to="/clients">Clients</Link></Button>*/}
                    <PopularProducts/>

                    <Row>
                        <Col>
                            GDGDgD
                        </Col>
                        <Col>
                            dghsh
                        </Col>
                    </Row>
                    {/*<div class="row">*/}
                    {/*    <div class="col-sm">*/}
                    {/*        TEXT*/}
                    {/*    </div>*/}
                    {/*    <div class="col-sm">*/}
                    {/*        TEXT*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </Container>
            </div>

    );
    }
    }

    export default Home;