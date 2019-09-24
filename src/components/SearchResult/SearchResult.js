import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import { NavLink } from 'react-router-dom'
import { basicData } from '../../helper/AuthAPI/AuthAPI'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'
import './SearchResult.scss'

const SUCCESFUL = 200

class searchResult extends Component {
  state = {
    videos: null
  }

  componentDidMount = () => {
    const { match: { params } } = this.props

    this.fetchQuery(params.query)
    this.setState({
      videos: null
    })
  }

  fetchQuery = async query => {
    const response = await basicData.get('/search', {
      params: {
        q: query
      }
    })

    if (response.status === SUCCESFUL) {
      this.setState({ videos: response.data.items })
    }
  }

  ellipsisText = (maxLength, text) => {
    return text.slice(0, maxLength) + "..."
  }

  render() {
    const { videos } = this.state
    const { match: { params } } = this.props
    let searchResult = null

    if (videos) {
      searchResult = videos.map(item => {
        return (
          <NavLink to={`/video-display/${item.id.videoId}`} params={{test: "testa"}} key={item.id.videoId} >
            <Card>
              <Container>
                <Row>
                  <Col xs="4">
                    <CardImg top width="100%" src={item.snippet.thumbnails.medium.url} alt="Video image" />
                  </Col>
                  <Col xs="8">
                    <CardBody>
                      <CardTitle>{item.snippet.title} (time)</CardTitle>
                      <CardText>{this.ellipsisText(125, item.snippet.description)}</CardText>
                      <CardText>
                        <small className="text-muted">
                          Published on: {new Date(item.snippet.publishedAt).toLocaleDateString()}
                        </small>
                      </CardText>
                    </CardBody>
                  </Col>
                </Row>
              </Container>
            </Card>
          </NavLink>
        )
      })
    }
    return (
      <Layout searchInitialValue={params.query}>
        <div className="search-Result__list">
          {searchResult}
        </div>
      </Layout>
    )
  }

}

export default searchResult