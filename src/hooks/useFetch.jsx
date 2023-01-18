
import React , {useEffect , useState} from 'react'
import {nanoid} from "nanoid"


export const useFetch = (url) => {
    const [data ,setData] = useState([])

    useEffect( ()=>{
        const getData = async() => {
          try {
            const response = await fetch(url);
            const data = await response.json()
            setData(data.map(country=> {
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
      },[url])

      return [data];
}
