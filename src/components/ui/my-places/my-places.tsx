'use client';

import { IconMap, IconPlus } from '@/components/icons';
import { ButtonMenu } from '@/components/primitives/menu-button';
import cn from 'clsx';
import { useState } from 'react';

import { deleteCity } from '@/lib/store/slices/citiesSlice';
import { changeCity } from '@/lib/store/slices/citySlise';
import { useDispatch, useSelector } from 'react-redux';
import { CityItem } from '../city-item';
import { SearchModal } from '../search-modal';

const MyPlaces = () => {
  const [isOpen, setOpen] = useState(true);
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

  return (
    <div className={cn('relative pl-5')}>
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
              className="flex items-center gap-2 text-sm mt-2 text-blue-500 hover:opacity-80"
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
