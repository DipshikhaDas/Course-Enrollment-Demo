// SelectFormControl.tsx
import { FormControl, InputLabel, NativeSelect, SelectChangeEvent } from '@mui/material';
import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectDropDownProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const SelectBatch: React.FC<SelectDropDownProps> = ({ label, options, value, onChange }) => {
  return (
    <FormControl sx={{ maxWidth: 200 }}>
      <InputLabel variant="standard" htmlFor={label}>
        {label}
      </InputLabel>
      <NativeSelect
        inputProps={{
          name: label,
        }}
        sx={{ width: 100 }}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SelectBatch;
