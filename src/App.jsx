import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddHotel from './Components/AddHotel/AddHotel';
import Layout from './Components/AdminLayout/Layout';

function App() {
  let routers = createBrowserRouter([
    { path: '/addhotel', element: <Layout /> }
  ]);
  return <RouterProvider router={routers}/>
}

export default App;