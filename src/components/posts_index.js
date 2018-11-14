import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';


class PostsIndex extends Component {
  // Lifecycle Method 
  // Always runs once after render
  // ex. fetch data async so b4 or after doesn't actually matter
  componentDidMount() {
    // API call, fetch data
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>{post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
        {/* anchor tag in React Router */}
        <Link className="btn btn-primary" to="/posts/new">
          Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );  
  }
}; 

// connect redux to react component
function mapStateToProps(state) {
  return { posts: state.posts };
}

// same as using mapDispatchToProps
// abbreviated syntax sugar, however not good if modifications are necessary
// state is the data from API call to component
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);