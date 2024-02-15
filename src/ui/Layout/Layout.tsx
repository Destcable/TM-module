import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return children ;
};

export default Layout;