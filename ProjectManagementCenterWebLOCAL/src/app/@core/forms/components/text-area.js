import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export const TextArea = props => {

  const {id, label, control, disabled = false} = props;

  return <Controller
    name={id}
    control={control}
    render={({ field }) => (
      <TextField size="small"
        {...field}
        id={id}
        label={label}
        className="mt-8 mb-16 mx-8"
        fullWidth
        variant="outlined"
        disabled={disabled}
        rows={4}
        multiline
      />
    )}
  />

}

