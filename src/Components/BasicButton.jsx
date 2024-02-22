import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButton(prop) {
  return (
    <div style={{margin:"10px"}} >
      <Button onClick={() => {
        if(isNaN(prop.val)){
          prop.setCount(0)
        }
        else{
          prop.setCount(prop.val)
        }
        
      }} variant="outlined">{prop.text}</Button>
    </div>
  );
}