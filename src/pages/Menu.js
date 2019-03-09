import React from 'react';
import {
  Collapse, DropdownItem, DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown
} from "reactstrap";
import {NavLink} from "react-router-dom";


export class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavLink to="/" className="navbar-brand">React</NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/heroes/">Heroes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/scoreboard">Scoreboard</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
