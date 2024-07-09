'use client';

import { addCity } from '@/lib/store/slices/citiesSlice';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

interface ModalProps {
  onClose?: () => void;
}

export const Modal = ({ onClose }: ModalProps) => {
  const [cityName, setCityName] = useState('');
  const [cityLat, setCityLat] = useState('');
  const [cityLon, setCityLon] = useState('');

  const dispatch = useDispatch();

  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleAddClick = () => {
    if (!cityName && !cityLat && !cityLon) return;

    const newCity = {
      name: cityName,
      lat: cityLat,
      lon: cityLon,
    };

    dispatch(addCity(newCity));

    if (onClose) {
      onClose();
    }
  };

  return (
    <React.Fragment>
      {createPortal(
        <div
          onClick={onClose}
          className="bg-plt-primary/80 backdrop-blur-sm absolute top-0 left-0 right-0 bottom-0 z-10 animate-fade-in"
        >
          <div
            onClick={handleCloseClick}
            className="h-fit w-96 p-3 m-auto absolute top-0 left-0 right-0 bottom-0 z-20 text-white rounded-3xl bg-gradient-to-b from-plt-primary to-plt-secondary animate-fade-in"
          >
            <p className="pt-3 opacity-60">Добавление нового места</p>
            <div className="grid gap-2 mt-5">
              <input
                value={cityName}
                onChange={(e) => setCityName(e.currentTarget.value)}
                className="w-full bg-plt-primary rounded-xl px-3 py-3"
                type="text"
                placeholder="Введите название города"
              />
              <input
                value={cityLat}
                onChange={(e) => setCityLat(e.currentTarget.value)}
                className="w-full bg-plt-primary rounded-xl px-3 py-3"
                type="text"
                placeholder="Укажите долготу"
              />
              <input
                value={cityLon}
                onChange={(e) => setCityLon(e.currentTarget.value)}
                className="w-full bg-plt-primary rounded-xl px-3 py-3"
                type="text"
                placeholder="Укажите широту"
              />
              <button
                onClick={handleAddClick}
                className="bg-blue-600 rounded-full mt-3 py-3 hover:opacity-80"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </React.Fragment>
  );
};
