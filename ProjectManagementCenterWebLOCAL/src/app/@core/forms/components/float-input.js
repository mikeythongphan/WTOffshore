import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export const FloatInput = props => {

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
        value={field.value}
        variant="outlined"
        disabled={disabled}
        onChange={ e => {

          const strVal = e.target.value
          let testVal = strVal;
          const ch = strVal.slice(-1);
          if (ch === '.') testVal += '0'
          if (isNaN(testVal)) return;
          field.onChange(strVal);

        }}
      />
    }}
  />

}

