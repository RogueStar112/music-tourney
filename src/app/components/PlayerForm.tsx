
"use client";

import { useState, useEffect } from "react";

import PlayerNames from "./PlayerNames";

export default function PlayerForm() {

  let [numberOfPlayers, setNumberOfPlayers] = useState(0);


   const handleChange = (e) => {
    setNumberOfPlayers(e.target.value);
  }

  useEffect(() => {
    console.log('NOP', numberOfPlayers)
  }, [numberOfPlayers])
 
  //  async function onSubmit(e: any) {
  //   e.preventDefault();

  //     const formData = new FormData(e.target)

  //     // console.log(formData);
  //     const response = await fetch('/api/submit', {
  //       method: 'POST',
  //       body: formData,
  //     })

  //     const data = await response.json() 

  //     console.log(data);
  // }

    

  return (

  <form className="text-white mx-auto flex flex-col max-w-3xl">
        
        <h1 className="text-center">Music Tourney - Player Setup</h1>

        <div className="flex gap-4 justify-center">
          Number of players<br /><br />

        
          <input type="radio" id="2_players" name="no_of_players" value={2} onChange={handleChange}>

         </input>

        <label htmlFor="2_players">2</label>

          <input type="radio" id="4_players" name="no_of_players" value={4} onChange={handleChange}>

         </input>

           <label htmlFor="4_players">4</label>

          <input type="radio" id="8_players" name="no_of_players" value={8} onChange={handleChange}>

         </input>


           <label htmlFor="8_players">8</label>




        <input type="radio" id="16_players" name="no_of_players" value={16} disabled>

         </input>

           <label htmlFor="16_players">16</label>
        </div>


        

        <PlayerNames no_of_players={numberOfPlayers} />

        <button className="bg-green-500 p-4 text-white justify-end w-full" type="submit">Submit</button>
  </form>

  )


}