import React from 'react'
import { Link } from 'react-router-dom'

export const Country = ({flag,countryName, population, region,capital,countryDetailIndex ,id}) => {
  return (
        <Link to="/countrydetail" >
          <div className='bg-[#fff] h-[23rem] transition ease-in-out duration-300   hover:-translate-y-1 hover:scale-110  duration-300  dark:text-[#fff] dark:bg-[#2B3945] w-[17rem] cursor-pointer ' onClick={(e)=>{countryDetailIndex(e,id)}}>
            <div>
              <img src={flag} alt="" className='h-[12rem]  drop-shadow-md' />
            </div>
            <div className='pl-[2rem] pt-[2rem]  space-y-1'>
              <h3 className='pb-[0.5rem] font-bold'>{countryName}</h3>
              <p><span className='font-bold'>Population</span>: {population}</p>
              <p><span className='font-bold'>Region</span>: {region}</p>
              <p><span className='font-bold'>Capital</span>: {capital}</p>
            </div>
          </div>
        </Link>
   
  )
}
