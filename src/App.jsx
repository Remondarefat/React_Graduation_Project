import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddHotel from './Components/AddHotel/AddHotel';
import Layout from './Components/AdminLayout/Layout';
import AllHotels from './Components/AllHotels/AllHotels';

function App() {
  let routers = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { path: '/addhotel', element: <AddHotel /> },
        { path: '/allhotel', element: <AllHotels /> }
    ] }
  ]);
  return <RouterProvider router={routers}/>
}

export default App;
