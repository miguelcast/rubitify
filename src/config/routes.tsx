import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Albums = lazy(() => import('../pages/Albums'));

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/artist/:artistId/albums',
    component: Albums,
    exact: true
  }
];

export default routes
