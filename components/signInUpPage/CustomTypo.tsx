// CustomContainer.jsx

import React, { ReactNode } from 'react';
import { Container, Typography } from '@mui/material';

interface CustomTypoProps {
  children: ReactNode;
}

const CustomTypo = ({ children }: CustomTypoProps) => {
  return (
    <Typography variant="body1"
    sx={{ "& a": { color: "blue", textDecoration: "underline" } }}>
      {children}
    </Typography>
  );
};

export default CustomTypo;
