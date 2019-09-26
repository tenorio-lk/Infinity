import React from 'react'
import Aux from '../../hoc/Aux/Aux'
import './VideoPlayer.scss'

const videoPlayer = ({ videoID }) => {
    let displayIframe = null
    
    if (videoID) {
        displayIframe = <iframe title="Videoa" width="100%" height="auto" src={`https://www.youtube.com/embed/${videoID}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    }

    return (
        <Aux>
            {displayIframe}
        </Aux>
    )
}

export default videoPlayer