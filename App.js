// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
  let [pstatus,setpstatus]=useState(false);
  let [mstatus, setmstatus] = useState(false);
  let [rstatus, setrstatus] = useState(false);
  // alert("HI")
  return (
    <div>
      <button className='en' onClick={()=>setrstatus(true)}>Enquiry now</button>
      <div onClick={()=>setrstatus(false)} className={`modal ${rstatus ? 'modalshow'  : ''}`}></div>
      <div className={`modaldiv ${rstatus ? 'modaldivshow'  : ''}`}>
        <h3>Enquiry now <span onClick={()=>setrstatus(false)}>&times;</span></h3>
      </div>
      <button className='micon' onClick={()=>setmstatus(!mstatus)}>
          {mstatus ? 
          <span>&times;</span>
        :
        <span>&#9776;</span>}
        </button>
      <div className={`menu ${mstatus ? 'activemenu':''}`}>
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>course</li>
          <li>Gallery</li>
        </ul>
      </div>
      
      <input type={pstatus ? 'text' :'password'}></input>
      <button onClick={()=>setpstatus(!pstatus)}>{pstatus? 'hide':'show'}</button>
    </div>
  );
}

export default App;
