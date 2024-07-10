'use client';

import React, { useState } from 'react';
import { Card } from '../card';
import Image from 'next/image';
import { IconSun, IconLocation, IconSearch } from '@/components/icons';
import { DateWithIcon } from '../date-with-icon';
import { iconsLib } from '@/lib/data/icons-lib';
import { SearchModal } from '../search-modal';

interface currentWeather {
  currentWeather: CurrentWeatherItem;
}

export interface CurrentWeatherItem {
  coord: { lon: number; lat: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export const WeatherInfo = ({ currentWeather }: currentWeather) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpenClick = () => {
    setOpen(true);
  };

  const handleCloseClick = () => {
    setOpen(false);
  };
  return (
    <Card className="bg-gradient-to-b from-plt-primary to-plt-secondary">
      <div className="relative border-b border-gray-700">
        {currentWeather?.weather[0]?.icon && (
          <Image
            src={iconsLib[currentWeather?.weather[0]?.icon]}
            alt="weather icon"
            width={100}
            height={100}
            className="w-[100px] h-[100px] object-contain"
          />
        )}

        <div className="flex gap-1 text-5xl mt-3">
          <p className="text-plt-white">
            {Math.round(currentWeather?.main?.temp)}
          </p>
          <span className="text-plt-white">&#176;C</span>
        </div>
        <div className="flex gap-2 items-center py-5 text-plt-white">
          <IconSun />
          <p className="font-light">
            {currentWeather?.weather[0]?.description?.charAt(0).toUpperCase() +
              currentWeather?.weather[0]?.description?.slice(1)}
          </p>
        </div>
        <button
          onClick={handleOpenClick}
          className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-plt-primary top-0 right-0 text-plt-white"
        >
          <IconSearch size={28} />
        </button>
        {isOpen && <SearchModal close={handleCloseClick} />}
      </div>
      <div className="grid gap-3 pt-5 ">
        <div className="flex gap-2 items-center font-light text-sm opacity-60 text-plt-white">
          <IconLocation size={20} />
          <p>{currentWeather?.name}</p>
        </div>
        <DateWithIcon />
      </div>
    </Card>
  );
};
