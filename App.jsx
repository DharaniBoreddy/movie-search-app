import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import Contextapi from './Context/Contextapi'

const App = () => {
  return (
    <div>
      <Contextapi>
        <RouterProvider router={router}/>
      </Contextapi>
    </div>
  )
}

export default App
