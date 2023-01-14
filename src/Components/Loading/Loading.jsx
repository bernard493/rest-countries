import React from 'react'
import loader from '../../assert/331-loader-2-lineal.gif'

export const Loading = () => {
  return (
    <div className=''>
         <div className='flex justify-center'>
            <img src={loader} alt=""  className='h-[10rem] w-[10rem] text-center'/>
         </div>
         <h1 className='text-xl font-bold text-center dark:text-[#fff]'>Loading ...</h1>
    </div>
  )
}
