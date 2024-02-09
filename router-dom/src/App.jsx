import MainLayout from "./MainLayout/MainLayout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [

        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/portfolio',
          element: <Portfolio/>
        },
        {
          path: '/services',
          element: <Services/>
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ],
    }
  ]);
  return (
    <div className="w-[100%]">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App