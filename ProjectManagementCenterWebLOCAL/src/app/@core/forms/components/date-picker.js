import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
export const DatePicker = props => {

 const { id, label, control, disabled = false } = props;
 const [date, setDate] = useState(new Date());

 const handleInputChange = (e) => {
  const { name, value, type } = e.target;

  setDate({
   ...date,
   [name]: value
  });
 };

 const convertToEventParam = (name, value) => ({
  target: {
   name,
   value
  }
 });

 return <Controller
  name={id}
  control={control}
  render={({ field }) => (
   <LocalizationProvider dateAdapter={AdapterDayjs}>
    <MobileDatePicker
     size="small"
     {...field}
     value={field.value === '' ? null : dayjs(field.value)}
     id={id}
     label={label}
     className="mt-8 mb-16 mx-8"
     sx={{ height: 20, width: "100%" }}
     fullWidth
     variant="outlined"
     disabled={disabled}
     onChange={(date) => {
      handleInputChange(
       convertToEventParam(label, date)
      )
      field.onChange(date)
     }}
    />
   </LocalizationProvider>
  )}
 />
}