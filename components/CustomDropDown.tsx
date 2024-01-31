// CustomDropdown.tsx

import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

interface CustomDropdownProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
  options: { value: string; label: string }[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, value, onChange, options }) => {
  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomDropdown;
