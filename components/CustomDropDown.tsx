import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface CustomDropdownProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  options: { value: string; label: string }[];
  errors: any;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, name, register, options, errors }) => {
  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        {...register(name)}
        error={!!errors[name]}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomDropdown;
