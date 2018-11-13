import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; 

class PostsNew extends Component {
 
  // field is the component Field has event handler to write up JSX Field component
  renderField(field) {
    return (
      <div className="form-group">
      <label >{field.label}</label>
        <input
          className="form-control"
          // makes available as props all the event handlers from input
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form action="">
      {/* 3 field for each form 
      Add props that passes in through field obj */}
        <Field 
          label="Title"
          name="title"
          component={this.renderField}

        />
        <Field 
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field 
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}
// similar to the connect helper now handled by reduxForm
// possible to display multiple forms \/
// Make sure value in object is a unique string
export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);

// PostsEdit.js