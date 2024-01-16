import React from 'react';
import {
  RouterProvider as ReactRouterProvider,
  createHashRouter,
} from 'react-router-dom';

import Layout from './components/Layout';
import Editor from './pages/Editor';
import Home from './pages/Home';
import Import, { loader } from './pages/Import';

export default function RouterProvider() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Layout title="OpenSCAD Web GUI" />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/import',
          element: <Import />,
          loader: loader,
        },
        {
          path: '/editor',
          element: <Editor />,
        },
      ],
    },
  ]);

  return <ReactRouterProvider router={router} />;
}
