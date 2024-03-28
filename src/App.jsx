import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { datafetch } from './actions';
import Data from "./Data"
function App() {
  const dataDisplay=useSelector(state=>state)
  console.log(dataDisplay);
  const dispatch=useDispatch();
  // const[tempData,setTempData]=React.useState([]);
  //  React.useEffect(()=>{ async function test(){
  //     const response=await fetch('http://localhost:3000/data');
  //     const data=await response.json();
  //     setTempData(data);
  //   }
  // test();
  // },[]);
  return (
    <div>
      <div className='btndiv'>
        <button onClick={()=>dispatch({type:"FETCH_REQUEST"})}>THIS WILL TRIGGER REDUX SAGA</button>
        
      </div>
      <div className='container'>
        {dataDisplay && (dataDisplay.length!=0 ?dataDisplay.map((data,index)=><Data key={index} object={data}/>):<h1>Data here is displayed using Redux-Saga Middlware</h1>)}
      </div>
    </div>

  )
}

export default App