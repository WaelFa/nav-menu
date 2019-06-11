import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap'




export default class Navmenu extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div className="container-nav">
                <Nav tabs className="abc" >
                    <NavItem  >
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to='/Home'>Home</NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle nav >
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/services"> Services</NavLink>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><NavLink to="/services/For_entrepreneurs">For entrepreneurs</NavLink></DropdownItem>
                            <DropdownItem ><NavLink to="/services/For_students">For students</NavLink></DropdownItem>
                            <DropdownItem><NavLink to="/services/For_hobbyists">For hobbyists</NavLink></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to="/contact">Contact </NavLink>
                    </NavItem>
                </Nav>
            </div >
        );

    }
}