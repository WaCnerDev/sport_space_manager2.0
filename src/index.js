import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';

import FormSportSpace from "./Pages/FormSportSpace";
import SpaceManager from "./Pages/SpaceManager";

import { createHashRouter, RouterProvider } from "react-router-dom";
const router = createHashRouter([
  {
    path: '/SportSpace',
    element: <FormSportSpace />
  },
  {
    path: '/',
    element: <SpaceManager />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);