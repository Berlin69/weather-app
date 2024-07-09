import React, { HtmlHTMLAttributes } from 'react';

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...props }: InputProps) => {
  return <input {...props} />;
};
