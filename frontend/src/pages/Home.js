import React, {Component} from 'react';
import '../styles/App.css';
import AppNavbar from '../components/AppNavbar';
import {Col, Container, Row} from 'reactstrap';
import PopularProducts from "../components/PopularProducts";
import Company from "../components/Company";

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    {/*<div*/}
                    {/*    style={{*/}
                    {/*        display: 'flex',*/}
                    {/*        alignItems: 'center',*/}
                    {/*        justifyContent: 'center',*/}
                    {/*        height: '20vh',*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <h2>ACME Inc</h2>*/}
                    {/*</div>*/}
                    {/*<Button color="link"><Link to="/clients">Clients</Link></Button>*/}
                    <Company/>
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