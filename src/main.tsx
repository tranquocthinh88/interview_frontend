import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { CssBaseline } from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { theme } from './theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/user/Home.tsx'
import LoginIndividual from './pages/user/login/LoginIndividual.tsx';
import LoginBusiness from './pages/user/login/LoginBusiness.tsx';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/home/login-individual',
    element: <LoginIndividual />
  },
  {
    path: '/home/login-business',
    element: <LoginBusiness />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </CssVarsProvider>
  </StrictMode>,
)
