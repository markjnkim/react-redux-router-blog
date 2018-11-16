import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
    // react-router method 
    // params contains wildcards in url
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick(){
    // gets id from react-router
    const { id } = this.props.match.params;
    // action creator call - add callback
    //programatic navigation - callback is 2nd argument
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    } );
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading . . .</div>;
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">Home</Link>
        <button onClick={this.onDeleteClick.bind(this)}className="btn btn-danger pull-xs-right">Delete Post</button>
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
// Common mistake is to render before data is acquired.  need to waiting until post is defined.
// Taking from Application State
// Destructuring
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };

}
// connect action to current component - getting data from redux
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);