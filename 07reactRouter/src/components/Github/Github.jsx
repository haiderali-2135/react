import React, { useEffect, useState } from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const Data = useLoaderData()
// const [Data, setData] = useState([]);


//    useEffect(() => {
//      fetch('https://api.github.com/users/hiteshchoudhary')
//      .then(response => response.json())
//      .then(data => {
//         console.log(data);
//         setData(data)
//      })
//    }, []);
   
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {Data.followers}
      <img  src={Data.avatar_url} alt="Fit Image" width={300} />
    </div>
  )
}

export default Github

export const githubloader = async () =>{
   const responce = await fetch('https://api.github.com/users/hiteshchoudhary');
   return responce.json();
}