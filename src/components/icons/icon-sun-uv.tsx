import { IconProps } from '@/lib/types';

export const IconSunUv = ({
  size = 24,
  fill = 'none',
  stroke = 'currentColor',
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4h.01" />
      <path d="M20 12h.01" />
      <path d="M12 20h.01" />
      <path d="M4 12h.01" />
      <path d="M17.657 6.343h.01" />
      <path d="M17.657 17.657h.01" />
      <path d="M6.343 17.657h.01" />
      <path d="M6.343 6.343h.01" />
    </svg>
  );
};