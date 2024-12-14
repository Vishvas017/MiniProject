import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Description = () => {


    const param = useParams();
    console.log(param)

    cosnt [storeData , setstoreData] = useState({})

    const getData = ()=>
    {
        axios
        .get(`http://localhost:3000/products/${param.id}`)
        .then((res) => setstoreData(res.data))
        .catch((err) => console.log(err))

    }

    useEffect(()=>
    { 
        getData();

    }, [])
  return (
    <div>
   <h1>Description page</h1>


   <div>
     <h1>{storeData.id}</h1>
     <img src= {storeData.img}/>

     <h4>
        {storeData.title}
     </h4>
     <p>{storeData.description}</p>
     <p>{storeData.price}</p>

     <i>{storeData.category}</i>
   </div>
      

    </div>
  )
}

export default Description