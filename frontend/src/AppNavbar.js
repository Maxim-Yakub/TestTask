import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import * as PropTypes from "prop-types";

function NavbarLink(props) {
    return null;
}

NavbarLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node
};
export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                {/*<NavbarBrand tag={Link} to="/">Home</NavbarBrand>*/}
                {/*<Button color="link"><Link to="/catalogue">Catalogue</Link></Button>*/}
                <Nav>
                    <NavItem>
                        <NavLink tag={Link} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/catalogue">Catalogue</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

            // <Container>
            //     <Nav>
            //         <NavItem>
            //             <NavLink tag={Link} to="/">Home</NavLink>
            //         </NavItem>
            //         <NavItem>
            //             <NavLink tag={Link} to="/catalogue">Catalogue</NavLink>
            //         </NavItem>
            //     </Nav>
            //
            //     {/*<Route exact path="/" component={Home} />*/}
            //     {/*<Route path="/catalogue" component={Catalogue} />*/}
            // </Container>
        );


        // <div>
        //     <nav className="navbar navbar-expand navbar-dark bg-dark">
        //         <a className="navbar-brand" href="#">Always expand</a>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02"
        //                 aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //
        //         <div className="collapse navbar-collapse" id="navbarsExample02">
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item active">
        //                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Link</a>
        //                 </li>
        //             </ul>
        //             <form className="form-inline my-2 my-md-0">
        //                 <input className="form-control" type="text" placeholder="Search">
        //             </form>
        //         </div>
        //     </nav>
        // </div>


    }
}