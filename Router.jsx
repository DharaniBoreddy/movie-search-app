import React from 'react'

import Home from '../Component/Home'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../Component/Login'
import Sport from '../Component/Sport'
import Tvshow from '../Component/Tvshow'
import Moives from '../Component/Moives'
import Private from './Private'
import Sign from '../Component/sign'
import Serachbar from '../Component/Serachbar'
export const router = createBrowserRouter(
    [{index:true,element: <Private><Home/></Private>},
        {path:'/login',element:<Login/>},
    {path:'/sport',element:<Sport/>},
    {path:'/tvshow',element:<Tvshow/>},
    {path:'/moives',element:<Moives/>},
    {path:'/sign',element:<Sign/>},
    {path:'/bar',element:<Serachbar/>}
    ]
)
