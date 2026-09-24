import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import AppDetails from '../Pages/Apps/AppDetails';


export const router =createBrowserRouter([
{
    path:"/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>, 
      children:[
        {
          index: true,
          path:"/",
          Component: Home,
        },
        {
          loader:()=> fetch('data.json').then(res =>res.json()),
          path:"/Apps",
          Component: Apps,
        },
        {
          path:"/Installation",
          Component: Installation,
        },
        { 
          path:"/appDetails/:id",
          loader:()=> fetch('data.json').then(res =>res.json()),
          Component: AppDetails,
        },

          
      ]
}

])

