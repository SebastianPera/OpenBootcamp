import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("credentials")) || null;

  const logout = () => {
    user.conected = false;
    sessionStorage.setItem('credentials', JSON.stringify(user));
    navigate('/login');
  }

  return (
    <div>
      <Button className='m-1' variant='contained' onClick={logout}>Logout</Button>
      <Button className='m-1' variant='contained' onClick={() => navigate('/tasks/' + user.username)}>My tasks</Button>
    </div>
  )
}

export default DashBoard