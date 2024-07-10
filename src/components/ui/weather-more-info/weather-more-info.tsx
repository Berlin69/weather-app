import React from 'react';
import { Card } from '../card';
import {
  IconWind,
  IconDrop,
  IconSunUv,
  IconThermometer,
  IconEye,
} from '@/components/icons';
import { IconPressure } from '@/components/icons/icon-pressure';

interface WeatherMoreInfoProps {
  currentWeather: CurrentWeatherItem;
}

interface CurrentWeatherItem {
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

export const WeatherMoreInfo = ({ currentWeather }: WeatherMoreInfoProps) => {
  return (
    <Card className="bg-gradient-to-b from-plt-primary to-plt-secondary">
      <div>
        <p className="text-sm text-plt-white">Подробнее о погоде</p>
        <div className="grid grid-cols-3 gap-5 pt-5 2lg:grid-cols-2 xxs:grid-cols-1">
          <Card className="bg-plt-primary text-sm" rounded="md" padding="small">
            <div>
              <p className="opacity-80 text-plt-white">Ветер</p>
              <div className="flex gap-1 items-end pt-3">
                <div className="flex items-center gap-2 text-plt-white">
                  <IconWind />
                  <span className="text-3xl">
                    {currentWeather?.wind?.speed}
                  </span>
                </div>
                <span className="opacity-60 pb-0.5 text-plt-white">км/ч</span>
              </div>
            </div>
          </Card>
          <Card
            className="bg-plt-primary p-3 text-sm"
            rounded="md"
            padding="small"
          >
            <div>
              <p className="opacity-80 text-plt-white">Влажность</p>
              <div className="flex gap-1 items-end pt-3">
                <div className="flex items-center gap-2 text-plt-white">
                  <IconDrop />
                  <span className="text-3xl">
                    {currentWeather?.main?.humidity}
                  </span>
                </div>
                <span className="opacity-60 pb-0.5 text-plt-white">%</span>
              </div>
            </div>
          </Card>
          <Card
            className="bg-plt-primary p-3 text-sm"
            rounded="md"
            padding="small"
          >
            <div>
              <p className="opacity-80 text-plt-white">Макс. темп.</p>
              <div className="flex gap-1 items-center pt-3 text-plt-white">
                <IconSunUv />
                <span className="text-3xl text-plt-white">
                  {Math.round(currentWeather?.main?.temp_max)}&#176;C
                </span>
              </div>
            </div>
          </Card>
          <Card
            className="bg-plt-primary p-3 text-sm"
            rounded="md"
            padding="small"
          >
            <div>
              <p className="opacity-80 text-plt-white">Ощущается как</p>
              <div className="flex gap-1 items-center pt-3 text-plt-white">
                <IconThermometer />
                <span className="text-3xl text-plt-white">
                  {Math.round(currentWeather?.main?.feels_like)}&#176;C
                </span>
              </div>
            </div>
          </Card>
          <Card
            className="bg-plt-primary p-3 text-sm"
            rounded="md"
            padding="small"
          >
            <div>
              <p className="opacity-80 text-plt-white">Давление</p>
              <div className="flex gap-1 items-end pt-3">
                <div className="flex items-center gap-1 text-plt-white">
                  <IconPressure />
                  <span className="text-3xl text-plt-white">
                    {currentWeather?.main?.pressure}
                  </span>
                </div>
                <span className="opacity-60 pb-0.5 text-plt-white">гПа</span>
              </div>
            </div>
          </Card>
          <Card
            className="bg-plt-primary p-3 text-sm"
            rounded="md"
            padding="small"
          >
            <div>
              <p className="opacity-80 text-plt-white">Видимость</p>
              <div className="flex gap-1 items-end pt-3">
                <div className="flex items-center gap-1 text-plt-white">
                  <IconEye />
                  <span className="text-3xl text-plt-white">
                    {currentWeather?.visibility / 1000}
                  </span>
                </div>
                <span className="opacity-60 pb-0.5 text-plt-white">км</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
};
