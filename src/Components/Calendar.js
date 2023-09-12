import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DataContext } from '../Context/DataProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import { deDE } from '@mui/x-date-pickers/locales';

const customTheme = createTheme({
    palette: {
      primary: {
        main: "#346BD1",
      },
    },
    deDE,
  });

const popersx ={
    "& .MuiCalendarPicker-root":{
        backgroundColor: "#346BD1"
    }
}
  

export default function Calendar({name}) {

    const {value,setValue}=React.useContext(DataContext)
 
    

  return (
    <ThemeProvider theme={customTheme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      PoperProps={
        {
            sx:popersx
        }
      }
      label="Pick a Date"
      slots={{ openPickerIcon: UnfoldMoreOutlinedIcon }}
      onChange={(newValue)=>setValue(newValue)}  />
    </LocalizationProvider>
    </ThemeProvider>
  );
}