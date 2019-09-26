import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import './VideoCard.scss'

const videoCard = ({ video, query, favList }) => {
    const ellipsisText = (maxLength, text) => {
        let ellipsis = ""
        if (text.length > maxLength) ellipsis = "..." 
        return text.slice(0, maxLength) + ellipsis
    }

    const saveFavorite = (videoInfo) => {
        let favList = localStorage.getItem('favList')
        favList ? favList = JSON.parse(favList) : favList = []
        favList.push(videoInfo)
        localStorage.setItem('favList', JSON.stringify(favList))
    }

    return (
        <Card className="video-card__card">
            <NavLink to={`/video-display/${video.id.videoId}/${query}`} >
                <Container className="video-card__layout">
                    <Row className="video-card__layout__row">
                        <Col xs="5" md="4">
                            <img className="video-card__image" src={video.snippet.thumbnails.medium.url} alt="" />
                        </Col>
                        <Col xs="7" md="8">
                            <CardBody className="video-card__body">
                                <CardTitle className="video-card__title">
                                    {ellipsisText(50,video.snippet.title)}
                                </CardTitle>
                                <CardText className=" video-card__description">
                                    {ellipsisText(125, video.snippet.description)}
                                </CardText>
                            </CardBody>
                        </Col>
                    </Row>
                </Container>
            </NavLink>
            {favList ? 
                null : 
                <Button className="video-card--add" color="primary" onClick={() => saveFavorite(video)}>
                    Add Favorite
                </Button>
            }
        </Card>
    )
}

export default videoCard