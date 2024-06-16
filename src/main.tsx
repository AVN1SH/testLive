import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from './pages/Home.tsx';
import Faculties from './pages/Faculties.tsx';
import {Provider} from "react-redux";
import store from "./store/store.ts";
import ProtectedRoute from './components/auth/ProtectedRoute.tsx'
import StudentProtectedRoute from './components/auth/StudentProtectedRoute.tsx'
import Layout from "./pages/studentDashboard/Layout.tsx"
import Hello from './pages/studentDashboard/Hello.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='/faculties' element={<Faculties />}/>
      <Route path="/student-dashboard" element={<ProtectedRoute><StudentProtectedRoute><Layout /></StudentProtectedRoute></ProtectedRoute>}>
        <Route path="hello" element={<ProtectedRoute><StudentProtectedRoute><Hello /></StudentProtectedRoute></ProtectedRoute>}/>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />  
    </Provider>
  </React.StrictMode>,
)
