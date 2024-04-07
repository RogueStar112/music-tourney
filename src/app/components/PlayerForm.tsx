
"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import PlayerNames from "./PlayerNames";

import { fourPlayerGame, eightPlayerGame } from "./game/modes/eightPlayerGame";

export default function PlayerForm() {

  let [numberOfPlayers, setNumberOfPlayers] = useState(0);

  let [playersDeclared, setPlayersDeclared] = useState(false);

  const router = useRouter()

   const handleChange = (e) => {
    setNumberOfPlayers(e.target.value);
  }

  useEffect(() => {
    console.log('NOP', numberOfPlayers)
  }, [numberOfPlayers])
 
   async function onSubmit(e: any) {
    e.preventDefault();

      const formData = new FormData(e.target);

      let playerNamesURI = ''      

      for (const pair of formData.entries()) {

        if(pair[0] !== 'no_of_players') {
    
            playerNamesURI += (`?${pair[0]}=${pair[1].replaceAll(" ", "%20")}`);

        }


      }

      // let formData_names = formData.entries();

      // console.log('FDN', formData_names)

      const rules = numberOfPlayers === 4 ? fourPlayerGame : eightPlayerGame;

      const redirectUrl = `/game?rules=${encodeURIComponent(JSON.stringify(rules))}?players=${numberOfPlayers}${playerNamesURI}`; 


      
      router.push(redirectUrl); 
      // const response = await fetch('/api/post_names', {
      //   method: 'POST',
      //   body: formData,
      // })

      // const data = await response.json() 

      // console.log(data);
  }

    

  return (

  <form onSubmit={onSubmit} className="text-white mx-auto flex flex-col max-w-3xl">
        
        <h1 className="text-center">Music Tourney - Player Setup</h1>

        <div className="flex gap-4 justify-center">
          Number of players<br /><br />

        
          <input type="radio" id="2_players" name="no_of_players" value={2} onChange={handleChange} disabled>

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

        

        <button type="submit" className="bg-green-500 p-4 text-white justify-end w-full">Submit</button>
  </form>

  )


}