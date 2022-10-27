import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate('/images');
      }}
    >
      이동
    </Button>
  );
}

export default WelcomePage;
