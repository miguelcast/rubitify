import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Albums = lazy(() => import('../pages/Albums'));
const Songs = lazy(() => import('../pages/Songs'));

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
  },
  {
    path: '/artist/:artistId/album/:albumId/songs',
    component: Songs,
    exact: true
  }
];

export default routes
