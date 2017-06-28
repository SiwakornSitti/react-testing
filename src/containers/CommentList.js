import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import { getComments } from '../actions/comments'

class CommentListContainer extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: true,
    }
    this.toggleCommentVisablilty = this.toggleCommentVisablilty.bind(this)
  }

  componentDidMount() {
    this.props.getComments()
  }

  toggleCommentVisablilty() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <CommentList 
        comments={this.props.comments}
        isOpen={this.state.isOpen}
        toggleCommentVisablilty={this.toggleCommentVisablilty}
      />
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
})

export default connect(
  mapStateToProps,
  { getComments: getComments },
)(CommentListContainer)
