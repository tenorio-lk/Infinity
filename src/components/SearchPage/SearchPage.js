import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import SearchInput from '../SearchInput/SearchInput'
import { InfinityLogo } from '../../assets/Svgs/Svgs'
import './SearchPage.scss'
import { Container, Col, Row } from 'reactstrap'

class searchPage extends Component {

    render(){
        return(
            <Layout displaySearch={false}>
                <Container className="search-page__layout">
                    <Row>
                        <Col md="8" xl="4">
                            {/* <img src={logo} alt="Infinity logo" className="search-page__image" /> */}
                            <InfinityLogo />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="8" xl="4">
                            <h1 className="search-page--title">INFINITY</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="10" xl="8">
                            <SearchInput className="search-page__input" />
                        </Col>
                    </Row>
                </Container>
            </Layout>
        )
    }
}

export default searchPage