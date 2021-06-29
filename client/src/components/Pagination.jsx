/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import { getPosts, getUserPosts } from '../actions/posts';
import useStyles from './styles';

const Paginate = ({ page, isHome }) => {
  const { numberOfPages } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    if (page && isHome) {
      dispatch(getPosts(page));
    }
    else dispatch(getUserPosts(page));
  }, [dispatch, page, isHome]);

  return (
    <Pagination
      classes={{ ul: classes.ul, li: classes.li }}
      count={numberOfPages}
      variant="outlined"
      color="secondary"
      page={Number(page) || 1}
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={isHome? `/home?page=${item.page}`: `/admin?page=${item.page}`} />
      )}
    />
  );
};

export default Paginate;
