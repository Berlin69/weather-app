'use client';

import { Skeleton } from '@/components/primitives/skeleton';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Forecast } from '../forecast';
import { Menu } from '../menu';
import { CurrentWeatherItem, WeatherInfo } from '../weather-info';
import { WeatherMoreInfo } from '../weather-more-info';
import { changeCity } from '@/lib/store/slices/city-slice';

export async function getWeather() {}

export const WeatherApp = () => {
  const selectedCity = useSelector((state: any) => state.city);
  const currentUnit = useSelector((state: any) => state.unit);

  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherItem>();
  const [currentForecast, setCurrentForecast] = useState([]);
  const [isInitializeLoading, setInitializeLoading] = useState<boolean>(true);

  // индикаторы загрузки
  const [isWeatherLoading, setWeatherLoading] = useState(true);
  const [isForecastLoading, setForecastLoading] = useState(true);

  const dispatch = useDispatch();

  // Получаем геолокацию пользователя
  useEffect(() => {
    if (isInitializeLoading) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const { latitude, longitude } = coords;
          const newCity = {
            name: '',
            lat: latitude,
            lon: longitude,
          };

          dispatch(changeCity(newCity));
          setInitializeLoading(false);
        });
      }
    }
  }, []);

  useEffect(() => {
    setWeatherLoading(true);
    async function getCurrentWeather(lat: string, lon: string) {
      if (!isInitializeLoading) {
        try {
          const weather = await axios.get(`/api/weather`, {
            params: {
              lat: lat,
              lon: lon,
              units: currentUnit.unit,
            },
          });
          setCurrentWeather(weather.data);
          setWeatherLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
    }
    selectedCity && getCurrentWeather(selectedCity.lat, selectedCity.lon);
  }, [selectedCity, currentUnit]);

  useEffect(() => {
    setForecastLoading(true);
    async function getCurrentForecast(lat: string, lon: string) {
      try {
        const forecast = await axios.get(`/api/forecast`, {
          params: {
            lat,
            lon,
            units: currentUnit.unit,
          },
        });
        setCurrentForecast(forecast.data);
        setForecastLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    selectedCity && getCurrentForecast(selectedCity.lat, selectedCity.lon);
  }, [selectedCity, currentUnit]);

  return (
    <div className="max-h-screen h-full">
      <div className="py-5 grid grid-cols-[1fr_4fr] gap-5 md:grid-cols-1">
        <Menu />
        <div className="grid gap-5">
          <div className="grid grid-cols-[1fr_2fr] gap-5 3md:grid-cols-1">
            {!isWeatherLoading ? (
              <WeatherInfo currentWeather={currentWeather!} />
            ) : (
              <Skeleton className="h-[337px] p-5">
                <div className="w-[100px] h-[100px] rounded-full bg-plt-primary"></div>
                <div className="w-1/2 h-12 bg-plt-primary mt-3 rounded-lg"></div>
                <div className="flex py-5 gap-2">
                  <div className="w-6 h-6 rounded-full bg-plt-primary"></div>
                  <div className="h-6 w-full bg-plt-primary rounded-lg"></div>
                </div>
                <div className="grid gap-2 pt-5 border-t border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-plt-primary"></div>
                    <div className="h-6 w-full bg-plt-primary rounded-lg"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-plt-primary"></div>
                    <div className="h-6 w-full bg-plt-primary rounded-lg"></div>
                  </div>
                </div>
              </Skeleton>
            )}
            {!isWeatherLoading ? (
              <WeatherMoreInfo currentWeather={currentWeather!} />
            ) : (
              <Skeleton className="h-[327px] p-5">
                <p className="text-sm">Подробнее о погоде</p>
                <div className="grid grid-cols-3 gap-5 pt-5">
                  <div className="h-[92px] rounded-lg bg-plt-primary"></div>
                  <div className="h-[92px] rounded-lg bg-plt-primary"></div>
                  <div className="h-[92px] rounded-lg bg-plt-primary"></div>
                  <div className="h-[92px] rounded-lg bg-plt-primary"></div>
                  <div className="h-[92px] rounded-lg bg-plt-primary"></div>
                  <div className="h-[92px] rounded-lg bg-plt-primary"></div>
                </div>
              </Skeleton>
            )}
          </div>
          <div className="grid grid-cols-1 gap-5">
            <p className="text-plt-white">Прогноз погоды на 5 дней</p>
            {!isForecastLoading ? (
              <Forecast forecast={currentForecast} />
            ) : (
              <Skeleton className="h-[235px] p-5">
                <div className="flex justify-between gap-2">
                  <div className="grid items-center">
                    <div className="w-11 h-5 rounded-lg bg-plt-primary mx-auto"></div>
                    <div className="w-14 h-5 rounded-lg bg-plt-primary mt-1 mx-auto"></div>
                    <div className="w-14 h-9 rounded-lg bg-plt-primary mt-3 mx-auto"></div>
                    <div className="w-20 h-20 rounded-full bg-plt-primary mt-3 mx-auto"></div>
                  </div>
                  <div className="grid items-center">
                    <div className="w-11 h-5 rounded-lg bg-plt-primary mx-auto"></div>
                    <div className="w-14 h-5 rounded-lg bg-plt-primary mt-1 mx-auto"></div>
                    <div className="w-14 h-9 rounded-lg bg-plt-primary mt-3 mx-auto"></div>
                    <div className="w-20 h-20 rounded-full bg-plt-primary mt-3 mx-auto"></div>
                  </div>
                  <div className="grid items-center">
                    <div className="w-11 h-5 rounded-lg bg-plt-primary mx-auto"></div>
                    <div className="w-14 h-5 rounded-lg bg-plt-primary mt-1 mx-auto"></div>
                    <div className="w-14 h-9 rounded-lg bg-plt-primary mt-3 mx-auto"></div>
                    <div className="w-20 h-20 rounded-full bg-plt-primary mt-3 mx-auto"></div>
                  </div>
                  <div className="grid items-center">
                    <div className="w-11 h-5 rounded-lg bg-plt-primary mx-auto"></div>
                    <div className="w-14 h-5 rounded-lg bg-plt-primary mt-1 mx-auto"></div>
                    <div className="w-14 h-9 rounded-lg bg-plt-primary mt-3 mx-auto"></div>
                    <div className="w-20 h-20 rounded-full bg-plt-primary mt-3 mx-auto"></div>
                  </div>
                  <div className="grid items-center">
                    <div className="w-11 h-5 rounded-lg bg-plt-primary mx-auto"></div>
                    <div className="w-14 h-5 rounded-lg bg-plt-primary mt-1 mx-auto"></div>
                    <div className="w-14 h-9 rounded-lg bg-plt-primary mt-3 mx-auto"></div>
                    <div className="w-20 h-20 rounded-full bg-plt-primary mt-3 mx-auto"></div>
                  </div>
                </div>
              </Skeleton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
