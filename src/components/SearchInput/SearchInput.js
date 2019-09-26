import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SearchVideosIcon } from '../../assets/Svgs/Svgs'
import { NavLink } from 'react-router-dom'
import Autocomplete from 'react-autocomplete'
import { basicData } from '../../helper/AuthAPI'
import { spacesCount } from '../../helper/numbers'
import {
    InputGroup,
    InputGroupAddon,
    Button } from 'reactstrap'
import './SearchInput.scss'

const SUCCESSFUL = 200

class SearchInput extends Component {
    state = {
        query: "",
        suggestions: [],
        previewSpaces: 0
    }

    componentDidMount = () => {
        const { inicialValue } = this.props
        if (inicialValue.length === 0 ) this.searchInput.focus()
        this.setState({ query: inicialValue })
    }

    handleChange = async event => {
        this.setState({
            query: event.target.value
        })
        if (this.shouldSuggestionsUpdate(event.target.value)){
            this.setState({ previewSpaces: spacesCount(event.target.value) })
            const request = await basicData.get('/search', {
                params: {
                  q: event.target.value,
                  type: "video",
                  maxResults: 3
                }
            })
    
            if (request.status === SUCCESSFUL) {
                const suggestions = request.data.items.map(video => (
                    { title: video.snippet.title }    
                ))
                this.setState({ suggestions })
            }
        }
    }
    
    shouldSuggestionsUpdate = (suggestions) => {
        const { previewSpaces } = this.state
        return spacesCount(suggestions) !== previewSpaces

    }

    suggestionsBox = (item, isHighlighted) => {
        return (
            <div key={item.title} className={`search-input__suggestions ${isHighlighted ? "search-input__suggestions--highlighted": ""}`}>
                {item.title}
            </div>
        )
    }
    
    render() {
        const { query, suggestions } = this.state
        const { initialValue } = this.props
        return (
            <form>
                <InputGroup className={`search-input--input ${initialValue === "" ? "search-input--input-nav" : ""}`} >
                    <Autocomplete
                        ref={(input) => this.searchInput = input }
                        inputProps={{ id: 'states-autocomplete' }}
                        wrapperStyle={{width: initialValue === "" ? "20rem" : "calc(100% - 45px)"}}
                        value={query}
                        items={suggestions}
                        getItemValue={(item) => item.title}
                        onSelect={(query, item) => {this.setState({ query, suggestions: [item] })}}
                        onChange={this.handleChange}
                        renderItem={this.suggestionsBox}
                        />
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