import React from 'react';
import { AppRouter } from './core/router/AppRouter';
import { PostsProvider } from './context/PostsContext';
import { ServicesProvider } from './context/ServicesContext';

export default function App() {
  return (
    <PostsProvider>
      <ServicesProvider>
        <AppRouter />
      </ServicesProvider>
    </PostsProvider>
  );
}
