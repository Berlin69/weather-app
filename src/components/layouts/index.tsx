import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <div className="w-full max-w-screen-xl px-5 mx-auto">{children}</div>;
};

export const Layout = {
  Container,
};
