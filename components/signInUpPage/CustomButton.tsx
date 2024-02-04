// CustomButton.tsx

import React from 'react';
import { Button } from "@mui/material";

interface CustomButtonProps {
  label: string,
  disable: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, disable }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      type='submit'
      disabled={disable}
      sx={{ marginBottom: '10px' }}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
