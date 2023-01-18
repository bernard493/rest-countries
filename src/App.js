import React, {useState ,useEffect, useMemo } from "react";
import {Navbar } from './Components/index'
import { Main , CountryDetail} from './Pages/index'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {CountryContext} from './Context/CountryContext'


function App() {
  const [theme, setTheme] = useState("light")
  const [countryInformation,setCountryInformation] = useState(null) 
  const countryDetailProvider = useMemo(()=>({countryInformation,setCountryInformation}),[countryInformation,setCountryInformation])
    


  useEffect(()=>{
    theme === "dark"?
     document.documentElement.classList.add("dark"):
     document.documentElement.classList.remove("dark")
  },[theme])
 
  function toggleTheme(){
    setTheme(theme === "light"? "dark": "light")
  }


  
  return (
    <BrowserRouter>
         <Navbar
              theme={theme} 
              toggleTheme={toggleTheme}
           />
     <Routes>
            <Route path="/rest-countries"  element={
              <CountryContext.Provider value={countryDetailProvider}>
                <Main/>
              </CountryContext.Provider>
            } />
            <Route path="countrydetail"   element={
              <CountryContext.Provider value={countryDetailProvider}>
                <CountryDetail/>
              </CountryContext.Provider>
            } />
           
     </Routes> 
      
     
    </BrowserRouter>
    
  );
}

export default App;
