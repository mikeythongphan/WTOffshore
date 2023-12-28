import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export const IntegerInput = props => {

  const { id, label, control, disabled = false } = props;

  return <Controller
    name={id}
    control={control}
    render={({ field }) => {
      return <TextField size="small"
        {...field}
        id={id}
        label={label}
        className="mt-8 mb-16 mx-8"
        fullWidth
        value={field.value === -1 ? '' : field.value}
        variant="outlined"
        disabled={disabled}
        onChange={ e => {
          const strVal = e.target.value          
          if (isNaN(strVal)) return;
          field.onChange(strVal.trim())
        }}
      />
    }}
  />

}

