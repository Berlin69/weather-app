import { routes } from '@/lib/api/constants';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const API_KEY = process.env.OPENWEATHER_API_KEY;

  const { searchParams } = new URL(req.url);

  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const units = searchParams.get('units');

  const weather = await fetch(
    `${routes.weather}?appid=${API_KEY}&lat=${lat}&lon=${lon}&units=${units}&lang=ru`
  ).then((response) => response.json());

  return NextResponse.json(weather);
};
