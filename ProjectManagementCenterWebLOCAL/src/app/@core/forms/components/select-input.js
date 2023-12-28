import { Controller } from 'react-hook-form';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { isUoN } from 'src/app/@core/common';

export const SelectInput = props => {

  const { id, label, control, disabled = false, items } = props;

  try {
    return <Controller
      name={id}
      control={control}
      render={params => {

        const { field } = params;

        let localItems = [];
        if (!isUoN(items)) localItems = items;
        if (localItems.length >= 0
          && localItems.filter(x => x.id === field.value).length === 0)
          field.value = 0;

        return <FormControl className="mt-8 mb-16 mx-8" fullWidth disabled={disabled}>
          <InputLabel id={id}>{label}</InputLabel>
          <Select
            {...field}
            id={id}
            labelId={label}
            label={label}
            defaultValue={0}
            size="small">
            <MenuItem value="0" style={{ height: 30 }}></MenuItem>
            {
              localItems.map(item => {
                return <MenuItem key={item.id} value={item.id}>
                  {item.itemName}
                </MenuItem>
              })
            }
          </Select>
        </FormControl>
      }}
    />

  } catch (err) {
    return <div>{err}</div>
  }

}

