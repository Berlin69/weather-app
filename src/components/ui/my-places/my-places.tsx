'use client';

import { IconArrow, IconMap, IconPlus } from '@/components/icons';
import { ButtonMenu } from '@/components/primitives/menu-button';
import cn from 'clsx';
import { useEffect, useState } from 'react';

import { deleteCity, setCities } from '@/lib/store/slices/cities-slice';
import { changeCity } from '@/lib/store/slices/city-slice';
import { useDispatch, useSelector } from 'react-redux';
import { CityItem } from '../city-item';
import { SearchModal } from '../search-modal';

const MyPlaces = () => {
  const [isOpen, setOpen] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isInitializeLoading, setInitializeLoading] = useState(true);
  const cities = useSelector((state: any) => state.cities);

  const dispatch = useDispatch();

  // Инициализация хранилища
  useEffect(() => {
    if (isInitializeLoading) {
      if (localStorage.getItem('cities')) {
        const citiesArray = localStorage.getItem('cities');
        if (citiesArray) {
          const parsedCitiesArray = JSON.parse(citiesArray);
          dispatch(setCities(parsedCitiesArray));
          setInitializeLoading(false);
        }
      } else {
        localStorage.setItem('cities', JSON.stringify(cities));
      }
    } else {
      localStorage.setItem('cities', JSON.stringify(cities));
    }
  }, [cities]);

  // удаление города
  const handleRemoveCity = (cityName: string) => {
    dispatch(deleteCity(cityName));
  };

  // закрытие модального окна
  const handleCloseClick = () => {
    setModalOpen(false);
  };

  // изменение города
  const handleChangeCity = (city: CityItem) => {
    dispatch(changeCity(city));
  };

  return (
    <div className={cn('relative px-5')}>
      <div className="">
        <ButtonMenu
          onClick={() => setOpen(!isOpen)}
          classNames="outline-none text-plt-white"
        >
          <IconMap />
          Мои места
          <IconArrow
            size={18}
            className={cn('transition-all', [
              isOpen ? 'rotate-180' : 'rotate-0',
            ])}
          />
        </ButtonMenu>
        <div
          className={cn('grid grid-rows-[0fr] transition-all', [
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          ])}
        >
          <div className="overflow-hidden">
            <ul className="overflow-hidden mt-3 flex flex-wrap gap-1">
              {cities.map((city: CityItem, index: number) => (
                <CityItem
                  key={index}
                  city={city}
                  onDelete={handleRemoveCity}
                  onclick={handleChangeCity}
                />
              ))}
            </ul>
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 text-sm mt-2 text-blue-500 outline-none hover:opacity-80"
            >
              <IconPlus size={16} />
              Добавить место
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <SearchModal close={handleCloseClick} />}
    </div>
  );
};

export default MyPlaces;
