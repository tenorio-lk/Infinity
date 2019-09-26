import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CurentTime from '../CurentTime/CurentTime'
import SearchInput from '../SearchInput/SearchInput'
import { FavoriteVideos } from '../../assets/Svgs/Svgs'
import { withRouter } from 'react-router-dom'
import { Back } from '../../assets/Svgs/Svgs'
import { InfinityLogoWhite } from '../../assets/Svgs/Svgs'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    UncontrolledTooltip } from 'reactstrap';
import './Toolbar.scss'
    
class Toolbar extends Component {
    state = { isOpen: false }

    toggleNav = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
    }

    render() {
        const { isOpen } = this.state
        const { displaySearch, displayGoBack, searchInitialValue, history } = this.props
        let searchInput = null
        let goBack = null

        if (displaySearch) { searchInput = <SearchInput inicialValue={searchInitialValue} /> }
        if (displayGoBack) {
            goBack = <Button style={{marginRight: "0.5rem"}} size="sm" color="primary" onClick={() => history.goBack()}><Back /> </Button>
        }

        return (
        <Navbar color="fourth" dark expand="md">
            {goBack}
            <NavbarBrand href="/" className="toolbar--logo"><InfinityLogoWhite /></NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/favorite-videos" id="favoriteVideos">
                            <FavoriteVideos/>
                        </NavLink>
                        <UncontrolledTooltip target="favoriteVideos">
                            Favorite Videos
                        </UncontrolledTooltip>
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
    displaySearch: true,
    displayGoBack: false
}

Toolbar.propTypes = {
    searchInitialValue: PropTypes.string,
    displaySearch: PropTypes.bool,
    displayGoBack: PropTypes.bool
}

export default withRouter(Toolbar)