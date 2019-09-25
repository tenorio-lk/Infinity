import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import { basicData } from '../../helper/AuthAPI'
import { Container, Col, Row, /*Media*/ } from 'reactstrap'
import VideoData from '../VideoData/VideoData'
import Comments from '../Comments/Comments'
import './VideoDisplay.scss'

const SUCCESFUL = 200

class videoDisplay extends Component {
    state = { videoInfo: null, comments: [] }

    componentDidMount = async () => {
        const { match : { params } } = this.props
        // const response = await basicData.get('/videos', {
        //     params: {
        //         id: params.videoId,
        //         part: 'snippet, statistics'
        //     }
        // })

        // if (response.status === SUCCESFUL) {
        //     this.setState({ videoInfo: response.data.items[0] })
        // }
        this.setState({ videoInfo: {
            "kind": "youtube#video",
            "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/ry4DhabqjmnL5c9h4QTGU9Ud-cA\"",
            "id": "YQHsXMglC9A",
            "snippet": {
              "publishedAt": "2015-10-23T06:54:18.000Z",
              "channelId": "UComP_epzeKzvBX156r6pm1Q",
              "title": "Adele - Hello",
              "description": "‘Hello' is taken from the new album, 25, out November 20. http://adele.com\nAvailable now from iTunes http://smarturl.it/itunes25 \nAvailable now from Amazon http://smarturl.it/25amazon \nAvailable now from Google Play http://smarturl.it/25gplay\nAvailable now at Target (US Only): http://smarturl.it/target25\n\nDirected by Xavier Dolan, @XDolan\n\nFollow Adele on:\n\nFacebook - https://www.facebook.com/Adele\nTwitter - https://twitter.com/Adele \nInstagram - http://instagram.com/Adele\n\nhttp://vevo.ly/jzAuJ1\n\nCommissioner: Phil Lee\nProduction Company: Believe Media/Sons of Manual/Metafilms\nDirector: Xavier Dolan\nExecutive Producer: Jannie McInnes\nProducer: Nancy Grant/Xavier Dolan\nCinematographer:  André Turpin\nProduction design : Colombe Raby\nEditor: Xavier Dolan\nAdele's lover : Tristan Wilds",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/YQHsXMglC9A/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/YQHsXMglC9A/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "AdeleVEVO",
              "tags": [
                "Adele",
                "21",
                "19",
                "Someone Like You",
                "Chasing Pavements",
                "Set Fire to the Rain",
                "Rolling in the Deep",
                "XL Recordings"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Adele - Hello",
                "description": "‘Hello' is taken from the new album, 25, out November 20. http://adele.com\nAvailable now from iTunes http://smarturl.it/itunes25 \nAvailable now from Amazon http://smarturl.it/25amazon \nAvailable now from Google Play http://smarturl.it/25gplay\nAvailable now at Target (US Only): http://smarturl.it/target25\n\nDirected by Xavier Dolan, @XDolan\n\nFollow Adele on:\n\nFacebook - https://www.facebook.com/Adele\nTwitter - https://twitter.com/Adele \nInstagram - http://instagram.com/Adele\n\nhttp://vevo.ly/jzAuJ1\n\nCommissioner: Phil Lee\nProduction Company: Believe Media/Sons of Manual/Metafilms\nDirector: Xavier Dolan\nExecutive Producer: Jannie McInnes\nProducer: Nancy Grant/Xavier Dolan\nCinematographer:  André Turpin\nProduction design : Colombe Raby\nEditor: Xavier Dolan\nAdele's lover : Tristan Wilds"
              },
              "defaultAudioLanguage": "en-US"
            },
            "statistics": {
              "viewCount": "2568522183",
              "likeCount": "14759572",
              "dislikeCount": "809080",
              "favoriteCount": "0",
              "commentCount": "873717"
            }
          } })

        const responseComments = await basicData.get('/commentThreads', {
            params: {
                videoId: params.videoId,
                maxResults: 20
            }
        })

        if (responseComments.status === SUCCESFUL) {
            this.setState({ comments: responseComments.data.items })
        }
    }

    render() {
        const { videoInfo, comments } = this.state
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
                <Row className="video-display__info--container video-display__info--divider">
                    <Col xs="12">
                      <VideoData
                        videoSnippet={videoInfo.snippet}
                        videoStatistics={videoInfo.statistics}
                      />
                    </Col>
                </Row>
                <Row className="video-display__info--container">
                    <Col xs="12">
                        <Comments total={videoInfo.statistics.commentCount} comments={comments} />
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