import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import { NavLink } from 'react-router-dom'
import { youtube } from '../../helper/AuthAPI/AuthAPI'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'
import './SearchResult.scss'

const SUCCESFUL = 200

class searchResult extends Component {
  state = {
    videos: null
  }

  componentDidMount = () => {
    // const { match: { params } } = this.props

    // this.fetchQuery(params.query)
    this.setState({
      videos: [
        {
          "kind": "youtube#searchResult",
          "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/w7QS0Zg25VgGW0_sZ2U4QiTQ_LE\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "_c1NJQ0UP_Q"
          },
          "snippet": {
            "publishedAt": "2017-07-06T19:41:45.000Z",
            "channelId": "UCq6aw03lNILzV96UvEAASfQ",
            "title": "hi, i&#39;m steve",
            "description": "http://billwurtz.com spotify: https://play.spotify.com/artist/78cT0dM5Ivm722EP2sgfDh patreon: http://patreon.com/billwurtz twitter: http://twitter.com/billwurtz itunes: ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/_c1NJQ0UP_Q/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/_c1NJQ0UP_Q/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/_c1NJQ0UP_Q/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "bill wurtz",
            "liveBroadcastContent": "none"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/Brf0zgHL_ozGwomticzxg1C-B1w\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "vqOkkVl1hUE"
          },
          "snippet": {
            "publishedAt": "2013-12-03T16:32:07.000Z",
            "channelId": "UCeRe0C1x1w8We6ghjVn4M5w",
            "title": "Vybz Kartel - Hi",
            "description": "Vybz Kartel's New Animated Video \"HI\" Directed & Animated By Mental Chung AND The Single Was Produced By Rvssian For Head Concussion Records WWW ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/vqOkkVl1hUE/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/vqOkkVl1hUE/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/vqOkkVl1hUE/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "VybzKartelVEVO",
            "liveBroadcastContent": "none"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/K_7uGv72CzA6f7t16RfGW8VmBBU\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "77lPaoa5nJI"
          },
          "snippet": {
            "publishedAt": "2017-05-03T21:25:56.000Z",
            "channelId": "UCpf42a3Bz4M9AdRDBXukneQ",
            "title": "&quot;Hi&quot; 100% Complete (INSANE DEMON) - by Krazyman50 - Geometry Dash [2.1]",
            "description": "Geometry Dash (Follow me: https://www.instagram.com/toshey) ID: 25147297 ──────────────────── Feel free to DONATE. It motivates me ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/77lPaoa5nJI/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/77lPaoa5nJI/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/77lPaoa5nJI/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "ToshDeluxe",
            "liveBroadcastContent": "none"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/MVdjHejq9fqFp3LCCMAY9k0Paws\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "7dZm9QoZfB4"
          },
          "snippet": {
            "publishedAt": "2019-06-09T13:00:02.000Z",
            "channelId": "UCPsHPn760XJYb0GzI8znzNQ",
            "title": "HI -  EPISODE 1 - Airwalk Indonesia Web Series",
            "description": "Adinata (Adi) memiliki hobi memperhatikan lingkungan sekitar sambil melukis. Saat sedang asik melukis, tiba-tiba ada seorang wanita yang menghampirinya ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/7dZm9QoZfB4/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/7dZm9QoZfB4/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/7dZm9QoZfB4/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Airwalk Indonesia",
            "liveBroadcastContent": "none"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/ZEurzVv92DJUC39rh-dhBHMmtbM\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "1K4KwuV2l4s"
          },
          "snippet": {
            "publishedAt": "2018-05-08T02:30:01.000Z",
            "channelId": "UCyQsKOT1L9wbuOBspErirjA",
            "title": "Amy Shark - I Said Hi (Official Video)",
            "description": "Amy Shark's new album 'Love Monster' is out now: http://smarturl.it/AS.LoveMonster AMY SHARK TOUR DATES - http://www.amyshark.com/ Directed by Amy ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/1K4KwuV2l4s/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/1K4KwuV2l4s/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/1K4KwuV2l4s/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "AmySharkVEVO",
            "liveBroadcastContent": "none"
          }
        }
      ]
    })
  }

  fetchQuery = async query => {
    const response = await youtube.get('/search', {
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
          <NavLink to={`/video-display/${item.id.videoId}`} key={item.id.videoId} >
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
                        <small className="text-muted">Published on: {new Date(item.snippet.publishedAt).toLocaleDateString()}</small>
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