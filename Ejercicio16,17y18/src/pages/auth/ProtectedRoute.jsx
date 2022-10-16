import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

  const user = JSON.parse(sessionStorage.getItem("credentials")) || null;
  const location = useLocation();

  if (!(user && user.conected === true)) {
    return <Navigate to='/login' state={{ location }}/>
  } 

  return children;
}

export default ProtectedRoute;