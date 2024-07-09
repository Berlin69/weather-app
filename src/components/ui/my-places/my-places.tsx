'use client';

import { IconMap, IconPlus } from '@/components/icons';
import { ButtonMenu } from '@/components/primitives/menu-button';
import cn from 'clsx';
import { useState } from 'react';

import { deleteCity } from '@/lib/store/slices/citiesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CityItem } from '../city-item';
import { Modal } from '../modal';
import { changeCity } from '@/lib/store/slices/citySlise';

const MyPlaces = () => {
  const [isOpen, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const cities = useSelector((state: any) => state.cities);

  const handleRemoveCity = (cityName: string) => {
    dispatch(deleteCity(cityName));
  };

  const handleCloseClick = () => {
    setModalOpen(false);
  };

  const handleChangeCity = (city: CityItem) => {
    dispatch(changeCity(city));
  };

  // console.log(cities);

  return (
    <div className={cn('relative pl-10')}>
      <div className="">
        <ButtonMenu onClick={() => setOpen(!isOpen)} classNames="outline-none">
          <IconMap />
          Мои места
        </ButtonMenu>
        <div
          className={cn('grid grid-rows-[0fr] transition-all', [
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          ])}
        >
          <div className="overflow-hidden">
            <ul className="overflow-hidden mt-3 grid gap-1">
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
              className="flex items-center gap-2 text-sm mt-2 text-blue-500 hover:opacity-80"
            >
              <IconPlus size={16} />
              Добавить место
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal onClose={handleCloseClick} />}
    </div>
  );
};

export default MyPlaces;
