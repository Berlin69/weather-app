import { IconLocation, IconMap } from '@/components/icons';
import { Logo } from '@/components/primitives/logo';
import { ButtonMenu } from '@/components/primitives/menu-button';
import React from 'react';
import MyPlaces from '../my-places/my-places';

export const Menu = () => {
  return (
    <div className="rounded-3xl h-full w-[300px] bg-gradient-to-b from-plt-primary to-plt-secondary py-5 flex flex-col justify-between">
      <div>
        <div>
          <Logo />
        </div>
        <div className="mt-10 grid gap-5">
          <MyPlaces />
          <ButtonMenu classNames="pl-5">
            <IconLocation />
            Моя геопозиция
          </ButtonMenu>
          <div></div>
        </div>
      </div>
    </div>
  );
};
