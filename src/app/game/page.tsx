


import { useState, useEffect } from "react";

import { useSearchParams } from 'next/navigation'




export default function Game({data}) {



    // const searchParams = useSearchParams();

    // const getPlayers = searchParams.get('players');


    
 
    

    return (
      <>
        <p className="text-white">{JSON.stringify(data)}</p>
      </>

  )
}