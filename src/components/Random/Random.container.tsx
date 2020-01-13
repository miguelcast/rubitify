import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Button from './Button';
import { AppDispatch } from '../../store';
import { fetchGenresAndRandom } from '../../store/genres/genresSlice';

const RandomContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onClick = useCallback(() => {
    dispatch(fetchGenresAndRandom());
  }, [dispatch]);

  return (
    <Button type="button" onClick={onClick}>SHUFFLE PLAY</Button>
  );
};

export default RandomContainer;
