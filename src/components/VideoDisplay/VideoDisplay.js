import React from 'react'

const videoDisplay = ({ match : { params } }) => (
    <h1>Now displaying video with the ID: {params.videoId}</h1>
)

export default videoDisplay