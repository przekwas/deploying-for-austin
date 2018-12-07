import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class AppMenuButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseEnter: '',
            mouseLeave: '',
            mouseDown: '',
            mouseUp: '',
            click: '',
            dropdownOpen: false
        };
        this.toggle = this.toggle.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    toggle() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }
    handleMouseEnter() {
        this.setState({ mouseEnter: ' icon-mouse-enter', mouseLeave: '' });
    }
    handleMouseLeave() {
        this.setState({ mouseLeave: ' icon-mouse-leave', mouseEnter: '' });
    }
    handleMouseDown() {
        this.setState({ mouseDown: ' icon-mouse-down', mouseUp: '' });
    }
    handleMouseUp() {
        this.setState({ mouseUp: ' icon-mouse-up', mouseDown: '' });
    }
    handleClick() {
        if (this.state.click === ' icon-click') {
            this.setState({ click: '' });
        } else this.setState({ click: ' icon-click' });
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{ border: 'none' }}>
                <DropdownToggle id='header-menu-button' style={{ border: 'none', outine: 'none' }}>
                    <div
                    /*  Initially this div was going to be used for styling and a built-from-scratch dropdown menu,
                        but I opted for a modified Bootstrap dropdown component instead */
                        id='header-menu-icon-wrapper'
                        className={'col-centered d-flex align-items-center' + this.state.mouseEnter + this.state.mouseLeave + this.state.mouseDown + this.state.mouseUp + this.state.click}
                        onMouseEnter={(event) => { this.handleMouseEnter(event.target) }}
                        onMouseLeave={(event) => { this.handleMouseLeave(event.target) }}
                        onMouseDown={(event) => { this.handleMouseDown(event.target) }}
                        onMouseUp={(event) => { this.handleMouseUp(event.target) }}
                        onClick={(event) => { this.handleClick(event.target) }}
                    >
                        <MaterialIcon id='header-menu-icon' icon='dehaze' color='#FEFEFE' size={50} />
                    </div >
                </DropdownToggle>
                <DropdownMenu className='header-dropdown-menu'right>
                    <DropdownItem className='menu-dropdown-item'>Home</DropdownItem>
                    <DropdownItem divider className='menu-dropdown-divider' />
                    <DropdownItem className='menu-dropdown-item'>Friends</DropdownItem>
                    <DropdownItem divider className='menu-dropdown-divider' />
                    <DropdownItem className='menu-dropdown-item'>My Profile</DropdownItem>
                    <DropdownItem divider className='menu-dropdown-divider' />
                    <DropdownItem className='menu-dropdown-item'>Account Settings</DropdownItem>
                    <DropdownItem divider className='menu-dropdown-divider' />
                    <DropdownItem className='menu-dropdown-item'>Log Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}

export default AppMenuButton;