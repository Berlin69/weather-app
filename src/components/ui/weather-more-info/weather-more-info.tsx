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
        <p className="text-sm">Подробнее о погоде</p>
        <div className="grid grid-cols-3 gap-5 pt-5">
          <Card className="bg-plt-primary text-sm" rounded="md" padding="small">
            <div>
              <p className="opacity-80">Ветер</p>
              <div className="flex gap-1 items-end pt-3">
                <div className="flex items-center gap-2">
                  <IconWind />
                  <span className="text-3xl">
                    {currentWeather?.wind?.speed}
                  </span>
                </div>
                <span className="opacity-60 pb-0.5">км/ч</span>
              </div>
            </div>
          </Card>
          <Card
            className="bg-plt-primary p-3 text-sm"
            rounded="md"
            padding="small"
          >
            <div>
              <p className="opacity-80">Влажность</p>
              <div className="flex gap-1 items-end pt-3">
                <div className="flex items-center gap-2">
                  <IconDrop />
                  <span className="text-3xl">
                    {currentWeather?.main?.humidity}
                  </span>
                </div>
                <span className="opacity-60 pb-0.5">%</span>
              </div>
            </div>
          </Card>
          <Card
            className="bg-plt-primary p-3 text-sm"
            rounded="md"
            padding="small"
          >
            <div>
              <p className="opacity-80">Макс. темп.</p>
              <div className="flex gap-1 items-center pt-3">
                <IconSunUv />
                <span className="text-3xl">
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
              <p className="opacity-80">Ощущается как</p>
              <div className="flex gap-1 items-center pt-3">
                <IconThermometer />
                <span className="text-3xl">
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
              <p className="opacity-80">Давление</p>
              <div className="flex gap-1 items-end pt-3">
                <div className="flex items-center gap-1">
                  <IconPressure />
                  <span className="text-3xl">
                    {currentWeather?.main?.pressure}
                  </span>
                </div>
                <span className="opacity-60 pb-0.5">гПа</span>
              </div>
            </div>
          </Card>
          <Card
            className="bg-plt-primary p-3 text-sm"
            rounded="md"
            padding="small"
          >
            <div>
              <p className="opacity-80">Видимость</p>
              <div className="flex gap-1 items-end pt-3">
                <div className="flex items-center gap-1">
                  <IconEye />
                  <span className="text-3xl">
                    {currentWeather?.visibility / 1000}
                  </span>
                </div>
                <span className="opacity-60 pb-0.5">км</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
};
