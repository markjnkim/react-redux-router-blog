import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; 

class PostsNew extends Component {
 
  // field is the component Field has event handler to write up JSX Field component
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
      <label >{field.label}</label>
        <input
          className="form-control"
          // makes available as props all the event handlers from input
          type="text"
          {...field.input}
        />
        <div className="text-help">
        {/* field.meta.touched ? field.meta.error */}
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
// values are the user entered data that is being validated
function validate(values) {
  
  const errors = {};

  // Validate the input from 'values' obj
  // If errors = null, reduxForm will submit input
  // If errors != null, reduxForm will not submit
  // errors.title is same as field attribute 
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title at least 3 characters log";
  }
  if (!values.categories || values.categories.length < 3) {
    errors.categories = "Enter a category at least 3 characters log";
  }
  if (!values.content || values.content.length < 3) {
    errors.content = "Enter some more content";
  }
  return errors;
}

// similar to the connect helper now handled by reduxForm
// possible to display multiple forms \/
// Make sure value in object is a unique string
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);

// PostsEdit.js