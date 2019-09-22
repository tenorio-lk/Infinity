import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SearchVideosIcon } from '../../assets/Svgs/Svgs'
import { NavLink } from 'react-router-dom'
import {
    InputGroup,
    InputGroupAddon,
    Button,
    Input } from 'reactstrap'

class SearchInput extends Component {
    state = {
        query: ""
    }

    componentDidMount = () => {
        const { inicialValue } = this.props
        this.setState({ query: inicialValue })
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        })
    }
    
    render() {
        const { query } = this.state
        return (
            <form>
                <InputGroup>
                    <Input placeholder="Search Video" value={query} onChange={this.handleChange}/>
                    <InputGroupAddon addonType="append">
                        <NavLink to={`/search-result/${query}`}>
                            <Button color="third">
                                <SearchVideosIcon />
                            </Button>
                        </NavLink>
                    </InputGroupAddon>
                </InputGroup>
            </form>
        )
    }
}

SearchInput.defaultProps = {
    inicialValue: ""
}

SearchInput.propTypes = {
    inicialValue: PropTypes.string
}

export default SearchInput