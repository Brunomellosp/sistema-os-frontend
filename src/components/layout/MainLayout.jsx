// src/components/layout/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppFooter from './AppFooter';

export default function MainLayout() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Se tiver um header/nav fixo, coloca aqui */}
      {/* <Header /> */}

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <AppFooter />
    </div>
  );
}