import React from 'react'

const videoPlayer = ({ videoID }) => {
    let displayIframe = null
    
    if (videoID) {
        displayIframe = <iframe width="100%" height="auto" title="Hello" src={`https://www.youtube.com/embed/${videoID}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
    }

    return (
        <div>
            {displayIframe}
        </div>
    )
}

export default videoPlayer