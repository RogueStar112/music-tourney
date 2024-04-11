


import { useState, useEffect } from "react";

import { useSearchParams } from 'next/navigation'




export default function Game({data}) {



    // const searchParams = useSearchParams();

    // const getPlayers = searchParams.get('players');


    /* convert to object so the game can read the form! */

    
    function convertFormToObject(form) {
      const object = {};
      for (const [key, value] of form) {
        object[key] = value;
      }
      return object;
    }

    let dataJSON = convertFormToObject(data);

    console.log(dataJSON)
    

    return (
      <>
        <p className="text-white">{JSON.stringify(dataJSON)}</p>
      </>

  )
}