// CustomButton.tsx

import React from 'react';
import { Button } from "@mui/material";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={onClick}
      sx={{ marginBottom: '10px' }}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
