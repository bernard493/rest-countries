import React from 'react'
import {MdOutlineDarkMode} from 'react-icons/md'
import {BiSun} from 'react-icons/bi'

export const Navbar = ({theme ,toggleTheme}) => {
  return (
    <div className='flex justify-between items-center px-[1.5rem] py-[1.5rem] bg-[#fff] dark:text-[#fff] dark:bg-[#2B3945] md:px-[5rem] py-[2.5rem]'>
        <div className=''>
            <h1 className='text-lg font-bold dark:text-[#fff] md:text-3xl'>Where in the world?</h1>
        </div>
        
          {
            theme === "dark"?
            <div className='flex items-center space-x-3 cursor-pointer' onClick={toggleTheme}>
                <MdOutlineDarkMode className='text-3xl'/>
                
            </div>
            :
            <div className='flex items-center space-x-3 cursor-pointer'onClick={toggleTheme}>
                <BiSun className='text-3xl'/>
                
            </div>
          }
            
    </div>
  )
}
