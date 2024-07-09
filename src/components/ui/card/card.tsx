import React from 'react';
import cn from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  rounded?: 'md' | 'xl';
  padding?: 'normal' | 'small';
}

const roundedVariants = {
  md: 'rounded-xl',
  xl: 'rounded-3xl',
};

const paddingVariants = {
  normal: 'p-5',
  small: 'p-3',
};

export const Card = ({
  children,
  rounded = 'xl',
  padding = 'normal',
  className,
}: CardProps) => {
  return (
    <div
      className={cn(
        roundedVariants[rounded],
        paddingVariants[padding],
        className
      )}
    >
      {children}
    </div>
  );
};
