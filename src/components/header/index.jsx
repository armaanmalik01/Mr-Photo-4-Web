import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css';
import PhotoPicker from '../photoPicker';

import { AiOutlineClear, AiOutlineMenu, AiOutlinePicture , AiOutlineBlock} from "react-icons/ai";
import { AppContext } from '../../context/AppContext.js';




import './index.css';

import { useState, useContext } from 'react';


export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
  }
  
  const {config , set_config } = useContext(AppContext)
  
  
  const handle_click = (val ,{target}) => {
    let ch = Array.from(document.getElementById("ctrl-btn").children);
    ch.forEach( e => e.style.borderColor = "#000" );
    target.style.borderColor = "green";
    set_config({...config, click: val});
  }
  
  
  const clean = () => {
    const page = document.getElementById("page");
    const children = Array.from(page.children);
    children.forEach(e => {
      if (e.innerHTML == "") {
        e.style.border = 'none'
      }
    })
  }
  
  const restore = () => {
    const page = document.getElementById("page");
    const children = Array.from(page.children);
    children.forEach(e => {
        e.style.border = '2px solid #000';
    })
  }
  
  const handlePrint = async () => {
    let start = document.querySelector(".box:first-child");
    start.scrollIntoView(true)
    clean()
    toggleDrawer();
    setTimeout(function() {
      print()
    }, 1000);
    
  }
  
  return <>
    <div id="menu" className="btn" onClick={toggleDrawer}>
      <AiOutlineMenu size="30px" /> <p>Passport Size Photo</p>
    </div>
    
    
    <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='drawer'>
         <div id="main">
          <div id="logo">
            <h3>Mr Photo Web</h3>
          </div>
          
          <div id="image-pick">
            <PhotoPicker />
          </div>
          
          <div id="ctrl-btn">
            <div style={{borderColor:'green'}} onClick={(e)=>handle_click('pic', e)}>
             <AiOutlinePicture />
             </div>
            <div onClick={(e)=>handle_click('cls', e)}>
              <AiOutlineClear />
            </div>
          </div>
          
          <div id="options">
            <p>Options</p>
            <div>
            <div className="option">
                <input checked disabled type="checkbox" id="border"/>
                <label htmlFor="border">Border</label>
            </div>
            <div className="option">
                <input disabled type="checkbox" id="title"/>
                <label htmlFor="title">Title</label>
            </div>
            <div className="option">
                <input disabled type="checkbox" id="date"/>
                <label htmlFor="date">Date</label>
            </div>
            </div>
          </div>
          
          <div id="print-btn">
            <button onClick={handlePrint}>Print</button>
          </div>
          
          <div id="footer">
            <center>
              <p style={{fontSize:'.8rem'}}>Created By Mohammad Armaan <a target="_blank" href="https://instagram.com/0_0_armaan_malik">@0_0_armaan_malik</a></p>
            </center>
          </div>
          
         </div>
    </Drawer>
  </>
}