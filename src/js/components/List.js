import React from 'react';
import { connect } from 'react-redux';
import { removeArticle } from 'js/actions/index';

const mapStateToProps = state => {
  return {
    articles: state.articles,
    removedArticles: state.removedArticles
  };
};

function mapDispatchToProps(dispatch) {
  return {
    removeArticle: article => dispatch(removeArticle(article))
  };
};

const ConnectedList = (props) => {

  const handleRemove = (evt) => {
    props.removeArticle({
      id: parseInt(evt.target.dataset.id)
    });
  };
  
  return (
    <>
      <h2>Articles</h2>
      <ul>
        { props.articles.map(el => (
          <li key={ el.id }>
            [{ el.id }] { el.title }
            <button data-id={ el.id } onClick={ handleRemove }>Remove</button>
          </li>
        )) }
      </ul>
      <h2>Trash</h2>
      <ul>
        { props.removedArticles.map(el => (
          <li key={ el.id }>[{ el.id }] { el.title }</li>
        )) }
      </ul>
    </>
  );
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;
