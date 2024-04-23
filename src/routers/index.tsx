import {
  AboutUs,
  Admin,
  Cart,
  ContractUs,
  ErrorPage,
  Home,
  Product,
  ProductDetail,
  Setting,
  SignIn,
  SignUp,
} from '../pages'
import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import UnprotectedRoute from './UnprotectedRoute'

const routes = [
  {
    element: <UnprotectedRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/products',
        element: <Product />,
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/contact-us',
        element: <ContractUs />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/settings',
        element: <Setting />,
      },
      {
        // path: '/checkout',
        // element: <Settings />,
      },
      {
        // path: '/orders',
        // element: <Settings />,
      },
      {
        // path: '/transactions',
        // element: <Settings />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)