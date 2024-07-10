import { iconsLib } from '@/lib/data/icons-lib';
import { monthNames } from '@/lib/data/month-names';
import { weekDaysNames } from '@/lib/data/week-days-names';
import Image from 'next/image';
import React from 'react';

export interface ForecastItemProps {
  day: ForecastItem;
}

export interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: { all: number };
  wind: { speed: number; deg: number; gust: number };
  visibility: number;
  pop: number;
  rain: { '3h': number };
  sys: { pod: string };
  dt_txt: string;
}

export const ForecastItem = ({ day }: ForecastItemProps) => {
  const date = new Date(day.dt_txt);

  return (
    <div>
      <div className="grid">
        <p className="text-sm opacity-60 font-medium mx-auto text-plt-white">
          {weekDaysNames[date.getDay()]}
        </p>
        <p className="text-sm opacity-60 font-thin mx-auto text-plt-white">
          {date.getDate()} {monthNames[date.getMonth()]}
        </p>
        <div className="flex items-end mt-3 text-3xl mx-auto text-plt-white">
          <p>{Math.round(day.main.temp)}&#176;</p>
        </div>
        <div className="max-w-[100px] max-h-[100px] mt-3 mx-auto sm:max-w-none sm:max-h-none">
          <Image
            src={iconsLib[day?.weather[0]?.icon]}
            alt="weather image"
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};
