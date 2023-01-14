import React, { useContext, useState,useMemo } from 'react'
import {BiArrowBack} from 'react-icons/bi'
import { CountryContext } from '../../Context/CountryContext'
import { Link } from "react-router-dom";
import { BorderCountry } from '../../Components/Country/BorderCountry';

export const CountryDetail = () => {
  {/** data of country user clicked */}
   const {countryInformation,setCountryInformation} = useContext(CountryContext)
   const [hasBorders ,setHasBorders] = useState(false)
   const [border ,setBorder] = useState([]);
   


   const {name ,flag,nativeName,population,region,subregion,capital, topLevelDomain,currencies,languages } = countryInformation[0]
   const countriesLanguages = languages.map(language=>language.name).join()
    

  


    useMemo(()=>{
          for(const key in countryInformation[0]){
            if(key === "borders"){
              setHasBorders(true);
              setBorder(countryInformation[0][key])
            } 
 }
    },[countryInformation]) 
    

   const borderCountries = hasBorders?  border.map( (border,index) => (
            <BorderCountry
              border={border}
              index={index}
             />
            )
          )
          : "Has no borders"
        
   
    
  
  return (
    <div className='px-[1.5rem] py-[1.5rem] bg-[#FAFAFA] h-full dark:bg-[#202C37]   md:px-[5rem] py-[2.5rem] '>
      <div className='py-[1.5rem]'>
        <Link to='/rest-countries'>
        <button  className='transition ease-in-out delay-300   hover:-translate-y-1 hover:scale-110  duration-300 bg-[#fff] h-[2.1rem] w-[7rem] flex items-center justify-center gap-4 drop-shadow-md rounded-md text-md  dark:bg-[#2B3945] dark:text-[#fff] ' > <BiArrowBack className='text-xl'/>
            Back
           </button>
        </Link>
         
      </div>
      <div className='flex flex-col gap-10 py-[5rem]    rounded-md  md:grid grid-cols-2  md:items-center  '>
             <div className=''>
                <img src={flag} alt="" className='h-[15rem] md:h-[20rem] w-[30rem]' />
             </div>
      
            <div className='space-y-5 dark:text-[#fff]'>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <div className=' md:grid grid-cols-2  md:items-center '>
                    <div className='space-y-1'>
                          <p><span className='font-bold'>Native Name</span> : {nativeName}</p>
                          <p><span className='font-bold'>Population</span> : {population}</p>
                          <p><span className='font-bold'>Region</span> : {region}</p>
                          <p><span className='font-bold'>Sub Region</span> : {subregion}</p>
                          <p><span className='font-bold'>Capital</span> : {capital}</p>
                    </div>
                    <div className='space-y-1'>
                          <p><span className='font-bold'>Top Level Domain</span> : {topLevelDomain[0]}</p>
                          <p><span className='font-bold'>Currencies</span> : {currencies[0].name}</p>
                          <p><span className='font-bold'>Languages</span> : {countriesLanguages}</p>
                        
                    </div>
                </div>
                <div className='pt-5 space-y-3 md:flex space-x-3  md:flex md:items-center '>
                  <div>
                     <p><span className='font-bold'>Border Countries</span>:</p>   
                  </div>
                   <div className='grid grid-cols-3  md:grid grid-cols-3 gap-3   '>
                     {borderCountries}      
                   </div>
                </div>
            </div>
      </div> 
      
    </div>
  )
}
