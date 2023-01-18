import React ,{useContext,useEffect,useState} from 'react'
import { CountryContext } from '../../Context/CountryContext'


export const BorderCountry = ({index,border}) => {
    const {setCountryInformation} = useContext(CountryContext)
    const [borderSelected ,setBorderSelected] = useState('')
    const borderApiUrl = 'https://restcountries.com/v2/alpha/'


{/** get details  border country user clicked  */}
    useEffect(()=>{
        if(borderSelected !== ''){
            const getBorderDetails = async()=>{
                try{
                  const response = await fetch(`${borderApiUrl}${borderSelected}`);
                  const data = await response.json();
                 
                  setCountryInformation([data])
                 
                } catch(error){
                  console.log(error)
                }
     }
     getBorderDetails()
        }
        


   },[borderSelected])
   
  
   
    function  borderDetails(){
        setBorderSelected(prevBorder => border)
       
    } 
    
   

  return (
    
           <button key={index} onClick={borderDetails} className='transition ease-in-out duration-300   hover:-translate-y-1 hover:scale-110  duration-300 bg-[#fff] h-[2.1rem] w-[7rem] flex items-center justify-center gap-4 drop-shadow-md rounded-md text-md  dark:bg-[#2B3945]'> 
                {border}
            </button>
   
  )
}
