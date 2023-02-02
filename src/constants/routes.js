import { lazy } from 'react';
import URLS from './urls';

const Catalog = lazy(() => import('../pages/catalog_page'));
const Favorites = lazy(() => import('../pages/fav_page'));
const Cart = lazy(() => import('../pages/cart_page'));
const Confirmation = lazy(() => import('../pages/confirmation_page'));
const NotFound = lazy(() => import('../pages/not_found_page'));

const ROUTES = [
  {
    id: 1,
    path: URLS.catalog,
    element: Catalog
  },
  {
    id: 2,
    path: URLS.confirm,
    element: Confirmation,
  },
  {
    id: 3,
    path: URLS.fav,
    element: Favorites,
  },
  {
    id: 4,
    path: URLS.cart,
    element: Cart,
  },
  {
    id: 6,
    path: URLS.not_found,
    element: NotFound,
  },
]

export default ROUTES;