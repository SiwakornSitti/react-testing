import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import { getComments } from '../actions/comments'

class CommentListContainer extends Component {
  componentDidMount() {
    this.props.getComments()
  }

  render() {
    return (
      <CommentList 
        comments={this.props.comments}
        loadMore={this.props.getComments}
      />
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
})

const mapDispatchToProps = dispatch => ({
  getComments: () => dispatch(getComments()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentListContainer)
