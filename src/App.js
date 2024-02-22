import React from 'react';
import SearchAppBar from './Components/SearchAppBar'
import BasicTextField from './Components/BasicTextFeild';
import BasicHeading from './Components/BasicHeading';
import BasicButton from './Components/BasicButton';
import { useState, useEffect } from 'react';
import { Padding } from '@mui/icons-material';

const App =() => {
  const[count,setCount] = useState(0);
  const[bill,setBill] = useState(0);
  const[runit,setRunit] = useState(0);
  const[unit,setUnit] = useState(0);
  return (
    <div style={{display:"flex",flexWrap:"wrap", justifyContent:"center",alignItems:"center"}}>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    {/* <SearchAppBar/> */}
    <div style={{border:"0.5px solid",borderRadius:"8px",margin:"20px",padding:"10px"}}>
    <BasicHeading text='Please enter the bill details:'/>
    <div onChange={(e)=>setBill(e.target.value)}>
    <BasicTextField  text='Enter Bill Amount(₹‎)'/>
    </div>
    <div onChange={(e)=>setUnit(e.target.value)}>
    <BasicTextField text='Enter Total Units'/>
    </div>
    <div onChange={(e)=>setRunit(e.target.value)}>
    <BasicTextField text='Enter Submeter Units'/>
    </div>
    
    <BasicButton text='calculate' val = {(bill/unit)*runit} count = {count} setCount = {setCount}/>
    </div>
    </div>
    <BasicHeading text={`Your tenant's bill is: ₹‎${count}`}/>
    
    </div>
  );
}

export default App;
