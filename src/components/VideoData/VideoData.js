import React from 'react'
import Aux from '../../hoc/Aux/Aux'
import { ThumbUp, ThumbDown } from '../../assets/Svgs/Svgs'
import {withCommas, formatDate, nFormatter, linesCount} from '../../helper/numbers'
import './VideoData.scss'

const videoData = ({videoSnippet, videoStatistics}) => {

    

    return (
        <Aux>
            <h1 className="video-data--title">{videoSnippet.title}</h1>
            <div className="video-data--statistics">
                <p className="video-data--views">
                    <span>{withCommas(videoStatistics.viewCount)} views |</span>
                    <span>| Published on {formatDate(new Date(videoSnippet.publishedAt))}</span>
                </p>
                <p className="video-data--evaluation">
                    <span><ThumbUp />{nFormatter(videoStatistics.likeCount)}</span>
                    <span><ThumbDown /> {nFormatter(videoStatistics.dislikeCount)}</span>
                </p>
            </div>
            <textarea className="video-data--description" rows={linesCount(videoSnippet.description)} readOnly value={videoSnippet.description} />
        </Aux>
    )
}

export default videoData