import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import SearchInput from '../SearchInput/SearchInput'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

class searchPage extends Component {
    state = {
        videos: []
    }

    render(){
        const { videos } = this.state
        let displayVideos = null
        if (videos) {
            displayVideos = videos.map(item => {
                return (
                    <div className="video" key={item.id.videoId}>
                        <VideoPlayer videoID={item.id.videoId} />       
                    </div>
                )
            })
        }

        return(
            <Layout displaySearch={false}>
                <SearchInput />
                <div className="videos">
                    {displayVideos}
                </div>
            </Layout>
        )
    }
}

export default searchPage