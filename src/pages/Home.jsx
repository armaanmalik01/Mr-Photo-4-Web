
import './Home.css';

import { AppContext } from '../context/AppContext.js';
import { useContext } from "react";


export default function Home(props) {
  const { config } = useContext(AppContext);
  
  const handleClick = ({target}) => {
    if(!config?.image) return alert("Please Select Image")
    if(config?.click === 'pic') target.innerHTML = `<img src="${config.image}"/>`;
    else target.innerHTML = "";
  }
  
  return <div id="home">
  <div id="page">
    {Array.from(new Array(42)).map((e,i) => 
      <div
        className='box'
        key={i}
        onClick={handleClick}
      >
       
      </div>
    )}
  </div>
  </div>
}