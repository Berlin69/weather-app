'use client';

import { addCity } from '@/lib/store/slices/citiesSlice';
import { changeCity } from '@/lib/store/slices/citySlise';
import React from 'react';
import { useDispatch } from 'react-redux';

export const SearchResultItem = ({ item, close }: any) => {
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const newCity = {
      name: item?.local_names?.ru ? item?.local_names?.ru : item?.name,
      lat: item.lat,
      lon: item.lon,
    };

    dispatch(addCity(newCity));
    dispatch(changeCity(newCity));

    close();
  };

  return (
    <button onClick={(e) => handleClick(e)} className="text-start">
      {item?.local_names?.ru ? item?.local_names?.ru : item?.name}
    </button>
  );
};
