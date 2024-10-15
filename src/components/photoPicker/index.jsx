import { AiOutlinePicture } from 'react-icons/ai';
import { useRef , useState, useContext } from "react";

import './index.css';

import { AppContext } from '../../context/AppContext.js';



export default function photoPicker(props) {
  const inputRef = useRef();
  const [ url , set_url ] = useState("");
  
  
  const {config , set_config } = useContext(AppContext)
  
  const handleChange = () => {
    const url = URL.createObjectURL(inputRef.current.files[0]);
    set_url(url);
    set_config({...config, image:url});
  }
  return <>
    { url ? <div className="main-image" style={{backgroundImage:`url(${url})`}}></div> 
    : <AiOutlinePicture onClick={()=>inputRef.current.click()} size={"10rem"} />
    }
    <input onChange={handleChange} ref={inputRef} type="file" accept="image/png, image/jpg, image/jpeg" style={{display:'none'}} />
  </>
}