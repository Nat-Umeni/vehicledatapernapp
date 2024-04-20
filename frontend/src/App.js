import './components/LoginPage/LoginPage'
import './App.css';
import { Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import HoursForm from './components/HoursForm/HoursForm';
import LoginPage from './components/LoginPage/LoginPage';

const router = createBrowserRouter(createRoutesFromElements(

  <>
    <Route path="/" element={ <LoginPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/hours" element={<HoursForm />} />

  </>
  
    
      

)); 



function App() {
  return (

    <RouterProvider router={router} />
    
  );
}

export default App