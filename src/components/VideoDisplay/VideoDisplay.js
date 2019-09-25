import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import { basicData } from '../../helper/AuthAPI/AuthAPI'
import { Container, Col, Row, /*Media*/ } from 'reactstrap'
import VideoData from '../VideoData/VideoData'
import './VideoDisplay.scss'

const SUCCESFUL = 200

class videoDisplay extends Component {
    state = { videoInfo: null }

    componentDidMount = async () => {
        const { match : { params } } = this.props
        const response = await basicData.get('/videos', {
            params: {
                id: params.videoId,
                part: 'snippet, statistics'
            }
        })

        if (response.status === SUCCESFUL) {
            this.setState({ videoInfo: response.data.items[0] })
        }
    }

    render() {
        const { videoInfo } = this.state
        const { match : { params: { query } } } = this.props
        let player = null
        if (videoInfo) {
            player = 
            <Container className="video-display__layout">
                <Row>
                    <Col xs="12" className="video-display__video-container">
                        <VideoPlayer videoID={videoInfo.id}/>
                    </Col>
                </Row>
                <Row className="video-display__info--container">
                    <Col xs="12">
                      <VideoData
                        videoSnippet={videoInfo.snippet}
                        videoStatistics={videoInfo.statistics}
                      />
                    </Col>
                </Row>
            </Container>
        }

        return (
            <Layout searchInitialValue={query} showBackBotton={true}>
                {player}
            </Layout>
        )
    }
}

export default videoDisplay