import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from 'js/actions/';

const Posts = (props) => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <>
      <h2>API Posts</h2>
      <ul>
        { props.articles.map(item => {
          if (item) {
            return (
              <li key={ item.id }>{ item.title }</li>
            )
          }
        }) }
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(Posts);
