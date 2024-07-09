import React from 'react';
import { IconCalendar } from '@/components/icons';
import { monthNames } from '@/lib/data/month-names';

export const DateWithIcon = () => {
  const date = new Date();

  return (
    <div className="flex gap-2 items-center font-light text-sm opacity-60">
      <IconCalendar size={20} />
      <p className="font-light">
        {date.getDate()} {monthNames[date.getMonth()]} {date.getFullYear()},{' '}
        {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:
        {date.getMinutes() <= 10 ? `0${date.getMinutes()}` : date.getMinutes()}
      </p>
    </div>
  );
};
