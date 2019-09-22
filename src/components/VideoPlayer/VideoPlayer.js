import React from 'react'

const videoPlayer = (props) => (
    <iframe width="100%" height="auto" title="Hello" src={`https://www.youtube.com/embed/${props.videoID}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
    </iframe>
)

export default videoPlayer