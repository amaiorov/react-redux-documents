import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from 'js/actions/';

const Posts = (props) => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <h2>API Posts</h2>
  );
};

export default connect(
  null,
  { getData }
)(Posts);
