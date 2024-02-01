// CustomButton.tsx

import React from 'react';
import { Button } from "@mui/material";

interface CustomButtonProps {
  label: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ label }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      type='submit'
      sx={{ marginBottom: '10px' }}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
