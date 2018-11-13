import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; 

class PostsNew extends Component {
  render() {
    return (
      <div>
        <h3>Title</h3>
        <form action=""></form>
        <h3>Categories</h3>
        <form action=""></form>
        <h3>Content</h3>
        <form action=""></form>
      </div>
    );
  }
}

export default reduxForm()(PostsNew);