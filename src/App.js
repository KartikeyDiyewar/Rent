import React from 'react';
import BasicTextField from './Components/BasicTextFeild';
import BasicHeading from './Components/BasicHeading';
import BasicButton from './Components/BasicButton';
import { useState } from 'react';


const App =() => {
  const[count,setCount] = useState(0);
  const[bill,setBill] = useState(0);
  const[rpunit,setRpunit] = useState(0);
  const[rcunit,setRcunit] = useState(0);
  const[unit,setUnit] = useState(0);
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center",alignItems:"center"}}>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <div style={{borderRadius:"8px",backgroundColor:"rgb(220, 220, 220)",padding:"10px",margin:"10px"}}>
    <BasicHeading text="Tenant's Electric Bill Calculator"/>
    </div>
    <div style={{border:"0.5px solid",borderRadius:"8px",margin:"20px",padding:"10px"}}>
    <BasicHeading text='Please enter the bill details:'/>
    <div onChange={(e)=>setBill(e.target.value)}>
    <BasicTextField  text='Enter Bill Amount(₹‎)'/>
    </div>
    <div onChange={(e)=>setUnit(e.target.value)}>
    <BasicTextField text='Enter Total Units'/>
    </div>
    <div onChange={(e)=>setRpunit(e.target.value)}>
    <BasicTextField text='Enter Previous Submeter Reading'/>
    </div>
    <div onChange={(e)=>setRcunit(e.target.value)}>
    <BasicTextField text='Enter Current Submeter Reading'/>
    </div>
    <BasicButton text='calculate' diff={(unit)-(rcunit-rpunit)} val = {(bill/unit)*(rcunit-rpunit)} count = {count} setCount = {setCount}/>
    </div>
    
    <BasicHeading text={`Submeter Units: ${(rcunit-rpunit)}`}/>
    </div>
    <BasicHeading text={`Your tenant's bill is: ₹‎${count}`}/>
    
    </div>
  );
}

export default App;
