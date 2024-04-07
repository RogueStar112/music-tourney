"use client";

import { useState, useEffect } from "react";

export default function PlayerNames(props: any) {

  let _numberOfPlayers = parseInt(props.no_of_players);  
  let [playerNames, setPlayerNames] = useState({});


  let colors = ['red', 'blue', 'green', 'yellow', 'teal', 'gray', 'brown', 'orange'];



  // const handlePlayerCountChange = (e) => {
  //   _setNumberOfPlayers(e);
  // }

 
  // const handlePlayerChange = (index: any, attribute: any, value: any) => {
  //   setPlayerNames({
  //     ...playerNames,
  //     [index]: {
  //       ...(playerNames[index] || {}), // Keep existing data
  //       [attribute]: value        
  //     }
  //   });
  // };

  

  useEffect(() => {

    // console.log('NOP PN', _numberOfPlayers)
    // console.log([...Array(_numberOfPlayers)])
    
  }, [_numberOfPlayers])

  let items = [...Array(_numberOfPlayers)].map((_, index) =>
        <li className="gap-3 col-span-1 text-center p-4 bg-slate-800" style={{color: colors[index]}} key={index}>Player {index + 1} Name:
             <input className="dark:text-white text-black rounded-full p-2 bg-slate-600 border-slate-400 border-2" type="text" name={`player-${index}`} />
        </li> 
  );

  // let [playerNames, setPlayerName] = useState({});

  return (
    <ul className={`grid grid-cols-1 md:grid-cols-2 items-center gap-3 m-3 [&>*]:[&>*]:mx-6 [&>*]:[&>input]:rounded-full`}>
      {items}
    </ul>
  )


}