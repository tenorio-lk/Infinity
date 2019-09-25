import React from 'react'
import Aux from '../../hoc/Aux/Aux'
import { ThumbUp, ThumbDown } from '../../assets/Svgs/Svgs'
import './VideoData.scss'

const videoData = ({videoSnippet, videoStatistics}) => {

    const withCommas = (num) => {
        return Number(num).toLocaleString('en');
    }

    const formatDate = (date) => {
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        return monthNames[monthIndex] + ' ' + day + ', ' + year;
    }

    const nFormatter = (num) => {
        num = Number(num)
        if (num >= 1000000000) {
           return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
    }

    const linesCount = (text) => {
        return (text.match(/\n/g) || []).length + 2
    }

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
            <p>Comments Count: ({videoStatistics.commentCount})</p>
        </Aux>
    )
}

export default videoData