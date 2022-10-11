import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from './pages/auth/RegisterPage';
import TaskPage from "./pages/tasks/TaskPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./pages/auth/ProtectedRoute";


function AppRouting() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/> 
          <Route path="/tasks" element={<ProtectedRoute><TaskPage/></ProtectedRoute>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRouting;
