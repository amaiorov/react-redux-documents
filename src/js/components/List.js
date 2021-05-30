import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    articles: state.articles,
    removedArticles: state.removedArticles
  };
};

const ConnectedList = (props) => {
  console.log(props);
  
  return (
    <>
      <h2>Articles</h2>
      <ul>
        { props.articles.map(el => (
          <li key={ el.id }>{ el.title }</li>
        )) }
      </ul>
      <h2>Trash</h2>
      <ul>
        { props.removedArticles.map(el => (
          <li key={ el.id }>{ el.title }</li>
        )) }
      </ul>
    </>
  );
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;
