import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addArticle } from 'js/actions/';

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

const ConnectedForm = (props) => {
  const [title, setTitle] = useState('');

  const handleChange = (evt) => {
    setTitle(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addArticle({ title });
    setTitle('');
  }

  return (
    <>
      <h2>Add a new article</h2>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={ title } onChange= { handleChange } />
        <button type="submit">Save</button>
      </form>
    </>
  );

}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
