'use client';

import { IconLocation } from '@/components/icons';
import { ButtonMenu } from '@/components/primitives/menu-button';
import { changeCity } from '@/lib/store/slices/citySlise';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const CurrentLocation = () => {
  const [isPending, setPending] = useState<boolean>(false);

  useEffect(() => {
    if (isPending) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          console.log(coords);
          const { latitude, longitude } = coords;
          // setLocation({ latitude, longitude });
          const newCity = {
            name: '',
            lat: latitude,
            lon: longitude,
          };

          dispatch(changeCity(newCity));
          setPending(false);
        });
      }
    }
  }, [isPending]);

  const dispatch = useDispatch();

  const handleGetGeoClick = () => {
    setPending(true);
  };

  return (
    <React.Fragment>
      <ButtonMenu onClick={handleGetGeoClick} classNames="pl-5">
        <IconLocation />
        Моя геопозиция
      </ButtonMenu>
    </React.Fragment>
  );
};