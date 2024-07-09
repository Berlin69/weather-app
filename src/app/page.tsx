import { Layout } from '@/components/layouts';
import { WeatherApp } from '@/components/ui/weather-app';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <Layout.Container>
        <WeatherApp />
      </Layout.Container>
    </React.Fragment>
  );
}
