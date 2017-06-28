import React from 'react'

const CommentList = props => (
  <div>
    <button id="toggle-button" className="button is-primary toggle-button" onClick={props.toggleCommentVisablilty}>Show/Hidden</button>
    <div id="comment-list" className={!props.isOpen && 'is-hidden'}>
      {
        props.comments.map((comment, index) => (
          <div className="box" key={`comment-${index}`}>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{comment.title}</strong> <small>@johnsmith</small> <small>31m</small>
                  <br />
                  {comment.body}
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)

export default CommentList
