import './App.css'

import Header from './components/header';
import { useState } from "react";


import { AppContextProvider } from "./context/AppContext.js";
import Home from './pages/Home';



function App() {
  
  
  const [config , set_config ] = useState(
    {
  image:"",
  border:true,
  title:"IMAGE",
  date:"",
  click: "pic" // cls
    })
  return (
    <AppContextProvider value={{config, set_config}}>
      <Header />
      <Home/>
    </AppContextProvider>
  )
}

export default App;