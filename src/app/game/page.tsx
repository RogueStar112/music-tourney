


import { useState, useEffect } from "react";

import { useSearchParams } from 'next/navigation'


import Bracket from "../components/game/Bracket";

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

    let no_of_players = dataJSON["no_of_players"];

    let gameRules = {
      "no_of_tracks": {"4": 4, "8": 2},
      
    }

    let initAmountOfTracks = gameRules["no_of_tracks"][dataJSON["no_of_players"]];


    let tracksRemaining = {}

    for(let i = 0; i<dataJSON["no_of_players"]; i++) {

        tracksRemaining[`player_${i+1}`] = initAmountOfTracks;

    }

    console.log("TRACKS REMAINING", tracksRemaining);

    // let tracksRemaining = {
    //   "player_1": initAmountOfTracks,
    //   "player_2": initAmountOfTracks
    // }

    function generateQueue(no_of_players) {


      const numbers = Array.from({length: no_of_players}, (_, i) => i + 1)

      return numbers


    }

    let queue = generateQueue(no_of_players)

    console.log(dataJSON)
    console.log("QUEUE", queue)    



    return (
      <>
        <p className="text-white">{JSON.stringify(dataJSON)}</p>
        <p className="text-white">{queue}</p>
        <Bracket />
      </>

  )
}