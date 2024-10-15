import { createContext } from "react";


export const AppContext = createContext("");

// {
//   image:"",
//   border:true,
//   title:"",
//   date:"",
//   click: "pic" // cls
// }

export const AppContextProvider = AppContext.Provider;
