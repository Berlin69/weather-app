'use client';

import React from 'react';
import { IconPlus } from '@/components/icons';
import { useSelector } from 'react-redux';
import cn from 'clsx';

interface CityItemProps {
  city: CityItem;
  onDelete?: (cityName: string) => void;
  onclick?: (city: CityItem) => void;
}

export interface CityItem {
  name: string;
  lat: string;
  lon: string;
}

export const CityItem = ({ city, onDelete, onclick }: CityItemProps) => {
  const currentCity = useSelector((state: any) => state.city);

  return (
    <li
      onClick={() => {
        if (onclick) {
          onclick(city);
        }
      }}
      className={cn(
        'flex items-center gap-2 w-fit p-2 rounded-xl text-sm cursor-pointer',
        [
          currentCity.lat === city.lat && currentCity.lon === city.lon
            ? 'bg-blue-500/20'
            : 'bg-plt-primary',
        ]
      )}
    >
      {city.name}
      <button
        onClick={() => {
          if (onDelete) {
            onDelete(city.name);
          }
        }}
      >
        <IconPlus size={12} className="text-red-500 rotate-45" />
      </button>
    </li>
  );
};
