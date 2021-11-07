import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from 'utils/actions';
import { QUERY_CATEGORIES } from 'utils/queries';
import { idbPromise } from 'utils/helpers';
// import useSelector and useDispatch from react-redux
import { useSelector, useDispatch } from 'react-redux';

function CategoryMenu() {
  // refactor code to remove useStoreContext and instead use useSelector and useDispatch
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
