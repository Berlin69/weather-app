'use client';

import React, { useEffect, useState } from 'react';
import { ButtonMenu } from '../primitives/menu-button';
import { IconArrow, IconSettings } from '../icons';
import cn from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { setUnit } from '@/lib/store/slices/unit-slice';
import { unitsData } from '@/lib/data/units-data';

export const UnitsSelect = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const currentUnit = useSelector((state: any) => state.unit);
  const dispatch = useDispatch();

  const handleOpenList = () => {
    setOpen(!isOpen);
  };

  const handleUnitSelect = (unit: string) => {
    dispatch(setUnit(unit));
  };

  return (
    <div className="px-5">
      <ButtonMenu onClick={handleOpenList} classNames="text-plt-white">
        <IconSettings />
        Единицы измерения
        <IconArrow
          size={18}
          className={cn('transition-all', [isOpen ? 'rotate-180' : ''])}
        />
      </ButtonMenu>
      <div
        className={cn('grid grid-rows-[0fr] gap-1 py-3 transition-all', [
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        ])}
      >
        <div className="overflow-hidden grid gap-1">
          {unitsData.map((unit) => (
            <button
              key={unit.unit}
              onClick={() => handleUnitSelect(unit.unit)}
              className={cn(
                'w-fit text-plt-white text-sm outline-none hover:opacity-80 rounded-lg p-2',
                [
                  currentUnit.unit === unit.unit
                    ? 'bg-blue-500/20'
                    : 'bg-plt-primary',
                ]
              )}
            >
              {unit.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
