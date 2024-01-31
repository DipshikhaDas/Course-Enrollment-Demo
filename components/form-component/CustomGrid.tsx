import React from 'react';
import { Grid } from '@mui/material';

interface CustomGridItemProps {
  children: React.ReactNode;
}

const CustomGridItem: React.FC<CustomGridItemProps> = ({ children }) => {
  return (
    <Grid item xs={12} md={8}>
      {children}
    </Grid>
  );
};

export default CustomGridItem;
