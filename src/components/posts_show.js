import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    // react-router method 
    // params contains wildcards in url
    const { id } = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}
// posts property from state
// only pass a single post target, not the posts array
// ownProps props obj going to current component
// allows outside global scope
// return just a single post
// allows component single responsibility (Show Post)
// mapStateToProps selects pc off global state obj
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };

}
// connect action to current component - getting data from redux
export default connect(mapStateToProps, { fetchPost })(PostsShow);