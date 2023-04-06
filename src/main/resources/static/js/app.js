
function show() {
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

const App = React.createClass({

    loadEmployeesFromServer: function () {
        const self = this;
        $.ajax({
            url: "http://localhost:8080/api/products"
        }).then(function (data) {
            self.setState({employees: data._embedded.employees});
        });
    },

    getInitialState: function () {
        return {employees: []};
    },

    componentDidMount: function () {
        this.loadEmployeesFromServer();
    },

    render() {
        return (<EmployeeTable employees={this.state.employees}/>);
    }
});

    ReactDOM.render(
        <EmployeeTable employees={EMPLOYEES} />, document.getElementById('root')
    );
}
