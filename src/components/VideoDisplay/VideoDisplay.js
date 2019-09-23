import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import { basicData } from '../../helper/AuthAPI/AuthAPI'
import Aux from '../../hoc/Aux/Aux'

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
        let player = null
        if (videoInfo) {
            player = 
            <Layout searchInitialValue={videoInfo.snippet.title}>
                <VideoPlayer videoID={videoInfo.id}/>
                <h1>Now displaying video with the ID: {videoInfo.id}</h1>
                <h1>Title: {videoInfo.snippet.title}</h1>
                <h1>Description: {videoInfo.snippet.description}</h1>
                <h1>Uploaded at: {new Date(videoInfo.snippet.publishedAt).toLocaleDateString()}</h1>
                <h1>Chanel: {videoInfo.snippet.channelTitle}</h1>
                <h2>Views: ({videoInfo.statistics.viewCount}) Likes: ({videoInfo.statistics.likeCount}) Dislikes: ({videoInfo.statistics.dislikeCount})</h2>
                <h3>Comments Count: ({videoInfo.statistics.commentCount})</h3>
            </Layout>
        }

        return (
            <Aux>
                {player}
            </Aux>
        )
    }
}

export default videoDisplay