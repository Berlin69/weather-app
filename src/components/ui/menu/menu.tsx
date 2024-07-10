import { IconLocation, IconMap } from '@/components/icons';
import { Logo } from '@/components/primitives/logo';
import { ButtonMenu } from '@/components/primitives/menu-button';
import React from 'react';
import MyPlaces from '../my-places/my-places';
import { CurrentLocation } from '../current-location';
import { UnitsSelect } from '@/components/units-select';

export const Menu = () => {
  return (
    <div className="rounded-3xl h-full w-[300px] bg-gradient-to-b from-plt-primary to-plt-secondary py-5 flex flex-col justify-between md:w-full">
      <div>
        <div>
          <Logo />
        </div>
        <div className="mt-10 grid gap-5">
          <MyPlaces />
          <CurrentLocation />
          <UnitsSelect />
        </div>
      </div>
    </div>
  );
};
