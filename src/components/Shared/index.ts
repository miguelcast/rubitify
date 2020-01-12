import { lazy } from 'react';

export const Button = lazy(() => import('./Button'));
export const List = lazy(() => import('./List'));
export const RoundFallBack = lazy(() => import('./RoundImage').then(module => ({ default: module.RoundFallBack })));
export const RoundImage = lazy(() => import('./RoundImage').then(module => ({ default: module.RoundImage })));
export const Duration = lazy(() => import('./Duration'));
