import React from 'react';
import cn from 'clsx';

interface ButtonMenuProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  classNames?: string;
}

export const ButtonMenu = ({
  children,
  classNames,
  ...props
}: ButtonMenuProps) => {
  return (
    <button className={cn('flex gap-3 items-center', classNames)} {...props}>
      {children}
    </button>
  );
};
