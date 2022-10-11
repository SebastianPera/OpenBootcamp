import React from 'react'
import Button from '@mui/material/Button'
import Copyright from './Copyright';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  
  const navigate = useNavigate();

  const logout = () => {
    navigate('/login');
  }

  return (
    <div>
      <Button className='m-1' variant='contained' onClick={logout}>Logout</Button>
      <Button className='m-1' variant='contained' onClick={() => navigate('/tasks')}>My tasks</Button>
    </div>
  )
}

export default DashBoard