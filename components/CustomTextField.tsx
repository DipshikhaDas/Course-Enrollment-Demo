import React from 'react';
import { TextField } from '@mui/material';

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  register: any;
  errors: any;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, name, type = 'text', register, errors }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      margin="normal"
      type={type}
      {...register(name)}
      error={!!errors[name]}
      helperText={errors[name]?.message}
    />
  );
};

export default CustomInput;
