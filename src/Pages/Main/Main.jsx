import React, { useState,useEffect ,useContext } from 'react';
import {nanoid} from "nanoid"
import {BiSearchAlt2} from 'react-icons/bi'
import {Country ,Loading} from '../../Components/index'
import { CountryContext } from '../../Context/CountryContext'

const regions = ['All','Africa','America','Asia','Europe','Oceania']


export const Main = () => {
  const [countries, setCountries] = useState([])
  const [region ,setRegion] = useState('')
  const [search,setSearch ] = useState('')
  const {countryInformation,setCountryInformation} = useContext(CountryContext)



  useEffect( ()=>{
    const getData = async() => {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        const data = await response.json()
        setCountries(data.map(country=> {
          return {
            id:nanoid(),
            ...country
          }
        }))

      } catch(error){
        console.log(error)
      }
    }
    getData()
  },[])

   {/** find courtly user clicked */}
  function countryDetailIndex(e,id){
    setCountryInformation(countries.filter((country) => {
     return id === country.id && country  
    }))
  
  }


  


  const country = countries.filter(country => {
    return search === '' && region === 'All' ? country 
    : country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)}
    ).map((country, index)=>
      <Country
      key={index}
      id={country.id}
      flag={country.flag}
      countryName={country.name}
      population={country.population}
      region={country.region}
      capital={country.capital}
      countryDetailIndex={countryDetailIndex}
   />)


  
  

  return (
    <div className='px-[1.5rem] py-[1.5rem]  bg-[#FAFAFA]  dark:bg-black   md:px-[5rem] py-[2.5rem] '>
      <div className=' flex flex-col md:flex md:flex-row justify-between' >
            <div className=' flex items-center space-x-6 '>
              <input
              className='relative text-md text-[#858585] bg-[#fff]  h-[4rem] py-[1.4rem] pl-[4rem] w-[30rem] drop-shadow-md dark:text-[#fff] dark:bg-[#2B3945] rounded-md md:w-[30rem]  md:pl-[4rem] md:text-md md:h-[4rem]  '
              placeholder='Search for a country ....'
              type="text" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              />
               <BiSearchAlt2 className=' absolute text-2xl text-[#858585] '/>
          </div>
          <div className='py-[3rem]'>
            <form>
                <label htmlFor="region">
               
                  <select
                  className='bg-[#fff] h-[4rem] py-[1.4rem] pr-[3rem] pl-[1rem]  dark:text-[#fff] dark:bg-[#2B3945] drop-shadow-md rounded-md text-red'
                      id="region"
                      value={region}
                      onChange={(e)=>{setRegion(e.target.value)}}
                   
                    >
                    <option   disabled  >Filler by Region </option>
                    
                    {regions.map((region ,index)=>(
                    <option className='' key={index}>{region}</option>
                    ))
                    }
                  </select>
                </label>
            </form>
          </div>
        
      </div>

      {
      countries.length === 0 ? 
      <div className='flex justify-center'>
         <Loading/>
      </div>
     
      :<div className='flex flex-col gap-10 py-[5rem] items-center justify-center   drop-shadow-md rounded-md  md:grid grid-cols-4  md:items-center  '> 
        {country}
      </div>}

    </div>
  )
}

