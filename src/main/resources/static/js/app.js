// class Header extends React.Component {
//     render() {
//         return (
//             <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Catalogue </a>
//                 </li>
//             </ul>
//         );
//     }
// }

// import React from 'react';
// import ReactDOM from "./react/react-15.0.1";

const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Hash = ReactRouterDOM.HashRouter;

const App = () => (
    // <main>
    //     <Switch>
    //         <Route path="/catalogue">
    //             <Catalogue />
    //         </Route>
    //
    //         <Route path="/">
    //             <EmployeeTable employees={EMPLOYEES} />
    //         </Route>
    //     </Switch>
    // </main>
    <HashRouter>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalogue">Catalogue</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>

        <Route path="/" exact component={Home} />
        <Route path="/catalogue" component={EmployeeTable} />
    </HashRouter>
);

ReactDOM.render(

        <App />
    ,
    document.getElementById('root')
);






const Employee = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.age}</td>
                <td>{this.props.employee.years}</td>
            </tr>);
    }
});
const EmployeeTable = React.createClass({
    render: function () {
        var rows = [];
        this.props.employees.forEach(function (employee) {
            rows.push(<Employee employee={employee}/>);
        });
        return (

            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Years</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>);
    }
});

const EMPLOYEES = [
    {name: 'Joe Biden', age: 45, years: 5},
    {name: 'President Obama', age: 54, years: 8},
    {name: 'Crystal Mac', age: 34, years: 12},
    {name: 'James Henry', age: 33, years: 2}
];

// const App = React.createClass({
//
//     loadEmployeesFromServer: function () {
//         const self = this;
//         $.ajax({
//             url: "http://localhost:8080/api/products"
//         }).then(function (data) {
//             self.setState({employees: data._embedded.employees});
//         });
//     },
//
//     getInitialState: function () {
//         return {employees: []};
//     },
//
//     componentDidMount: function () {
//         this.loadEmployeesFromServer();
//     },
//
//     render() {
//         return (<EmployeeTable employees={this.state.employees}/>);
//     }
// });

    // ReactDOM.render(
    //     <EmployeeTable employees={EMPLOYEES} />, document.getElementById('root')
    // );
    //
    // const navigation = ReactDOM.render(document.getElementById('navigation'));
    // navigation.render(header);

    // ReactDOM.render(<Header/>, document.getElementById('navigation'));


