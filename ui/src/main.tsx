import React from 'react';
import ReactDOM from 'react-dom/client';

import {QueryClientProvider} from '@tanstack/react-query';
import {RouterProvider, createRouter} from '@tanstack/react-router';

import './styles/index.css';
import {queryClient} from './queryClient';
import {routeTree} from './routeTree.gen';

const router = createRouter({
  context: {
    queryClient,
  },
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
