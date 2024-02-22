import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButton(prop) {
  return (
    <div style={{margin:"10px"}} >
      <Button onClick={() => {
        prop.setCount(0)
        if(isNaN(prop.val)){
          prop.setCount(0)
        }
        else if(prop.val<0){
          alert("previous submeter reading cannot be greater than current submeter reading")
        }
        else if(prop.diff<0){
          alert("submeter reading can't be higher than total unit")
        }
        else{
          prop.setCount(Math.ceil(prop.val))
        }
        
      }} variant="outlined">{prop.text}</Button>
    </div>
  );
}