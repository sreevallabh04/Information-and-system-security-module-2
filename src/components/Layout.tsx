import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Outlet />
    </div>
  );
};