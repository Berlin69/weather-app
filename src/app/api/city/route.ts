import { routes } from '@/lib/api/constants';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const API_KEY = process.env.OPENWEATHER_API_KEY;

  const { searchParams } = new URL(req.url);

  const cityName = searchParams.get('q');
  const limit = searchParams.get('limit');

  const city = await fetch(
    `${routes.city}?appid=${API_KEY}&q=${cityName}&limit=${limit}`
  ).then((response) => response.json());

  return NextResponse.json(city);
};
