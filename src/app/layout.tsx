import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './tailwind.css';
import StoreProvider from '@/lib/store/store-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather App with Next.JS',
  description: 'Developed by Maksim Opriatin',
  openGraph: {
    title: 'Weather App with Next.JS',
    description: 'Developed by Maksim Opriatin',
    images: ['/images/png/weather-app-preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <StoreProvider>
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
