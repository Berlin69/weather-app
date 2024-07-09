'use client';

import React from 'react';
import { createPortal } from 'react-dom';

interface SearchModalProps {
  close: () => void;
}

export const SearchModal = ({ close }: SearchModalProps) => {
  return (
    <React.Fragment>
      {createPortal(
        <div
          onClick={close}
          className="bg-plt-primary/80 backdrop-blur-sm absolute top-0 left-0 right-0 bottom-0 z-10 animate-fade-in"
        >
          <div
            // onClick={handleCloseClick}
            className="h-fit w-96 p-3 m-auto absolute top-0 left-0 right-0 bottom-0 z-20 text-white rounded-3xl bg-gradient-to-b from-plt-primary to-plt-secondary animate-fade-in"
          >
            <p className="pt-3 opacity-60">Поиск</p>
            <div className="grid gap-2 mt-5">
              <button className="bg-blue-600 rounded-full mt-3 py-3 hover:opacity-80">
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
