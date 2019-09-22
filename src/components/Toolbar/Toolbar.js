import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CurentTime from '../CurentTime/CurentTime'
import SearchInput from '../SearchInput/SearchInput'
import { FavoriteVideos } from '../../assets/Svgs/Svgs'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

class Toolbar extends Component {
    state = { isOpen: false }

    toggleNav = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
    }

    render() {
        const { isOpen } = this.state
        const { displaySearch, searchInitialValue } = this.props
        let searchInput = null

        if (displaySearch) { searchInput = <SearchInput inicialValue={searchInitialValue} /> }

        return (
        <Navbar color="fourth" dark expand="md">
            <NavbarBrand href="/">Infinity</NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="">
                        <FavoriteVideos />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        {searchInput}
                    </NavItem>
                    <NavItem>
                        <CurentTime />
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        )
    }
}

Toolbar.defaultProps = {
    searchInitialValue: "",
    displaySearch: true
}

Toolbar.propTypes = {
    searchInitialValue: PropTypes.string,
    displaySearch: PropTypes.bool
}

export default Toolbar