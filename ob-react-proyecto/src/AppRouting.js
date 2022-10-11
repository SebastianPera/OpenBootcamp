import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from "./pages/auth/LoginPage";
import DashBoard from "./pages/dashboard/DashBoard";


function AppRouting() {

  let loggedIn = true;

  return (
    <BrowserRouter>
      <Routes>

        <Route path="" element={loggedIn ? <Navigate to='/dashboard'/> : <Navigate to='/login'/>}/>

        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={loggedIn ? <DashBoard/> : <Navigate replace to='/login'/>}/>

        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouting;
