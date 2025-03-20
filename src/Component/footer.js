import React from "react";
import {Button, TextField}  from '@mui/material';
import '../App.css';

export default function Footers({onClick, onChange,inputValue}){

    return(
    <div className="footer-container">
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          value={inputValue} 
          onChange={onChange}
          size='small'
          sx={{marginTop:"20px"}}
        />
        <Button variant="contained" onClick={onClick} sx={{marginTop:"20px"}}>click</Button>
    </div>      
    )
}