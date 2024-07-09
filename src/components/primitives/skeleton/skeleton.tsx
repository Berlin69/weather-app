import React from 'react';
import cn from 'clsx';

interface SkeletonProps {
  children?: React.ReactNode;
  className?: string;
}

export const Skeleton = ({ children, className }: SkeletonProps) => {
  return (
    <div className={cn('rounded-3xl bg-gray-500/20', className)}>
      {children}
    </div>
  );
};
