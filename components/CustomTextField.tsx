// CustomTextField.tsx

import React from 'react';
import { TextField } from "@mui/material";

interface CustomTextFieldTypes {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextField: React.FC<CustomTextFieldTypes> = ({ label, name, type = "text", value, onChange }) => {
  return (
    <TextField
      label={label}
      name={name}
      type={type}
      variant="outlined"
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
    />
  );
}



export default CustomTextField;
