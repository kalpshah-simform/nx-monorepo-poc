import React from 'react';
import { Routes, Route } from 'react-router-dom';

export interface DefaultRoute {
  path: string;
  element: React.ReactElement;
}

export interface CommonRoutesProps {
  routes?: DefaultRoute[];
}

export function CommonRoutes({ routes = [] }: CommonRoutesProps) {
  const allRoutes = routes;

  return (
      <Routes>
        {allRoutes.map((route, index) => (
          <Route
            key={`${route.path}-${index}`}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
  );
}

export default CommonRoutes;
