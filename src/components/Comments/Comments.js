import React from 'react'
import { Media } from 'reactstrap'
import { withCommas } from '../../helper/numbers'
import './Comments.scss'

const comments = ({ total, comments }) => {
    const commentsDisplay = comments.map(comment => {
        const data = comment.snippet.topLevelComment
        return (
            <Media key={comment.id}>
                <Media left>
                    <Media className="comment--image" object src={data.snippet.authorProfileImageUrl} alt="" />
                </Media>
                <Media body className="comment__body">
                    <Media heading className="comment__body--title">
                        {data.snippet.authorDisplayName}
                    </Media>
                    <p>{data.snippet.textOriginal}</p>
                </Media>
            </Media>
        )
    })

    return (
        <div className="comment--container">
            <h2 className="comment--header">{withCommas(total)} Comments</h2>
            {commentsDisplay}
        </div>
    )
}

export default comments