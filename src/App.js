/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout, Loader } from './components';
import ROUTES from './constants/routes';
import URLS from './constants/urls';


const App = () => {
  const { pathname } = useLocation();
  const isCart = pathname === URLS.cart
  const isHeader = [URLS.catalog, URLS.cart, URLS.fav].includes(pathname);
  
  return (
  <Layout isCart={isCart} isHeader={isHeader}>
    <Routes>
      {ROUTES.map(({ id, path, element: Component}) => (
        <Route
          key={id}
          path={path}
          element={
            <Suspense fallback={<Loader />}>
              <Component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  </Layout>
)};

export default App;
