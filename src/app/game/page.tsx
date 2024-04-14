


import { useState, useEffect } from "react";

import { useSearchParams } from 'next/navigation'


import Bracket from "../components/game/Bracket";

import GameBrackets from "../components/game/GameBrackets";

import PlayerTurn from "../components/PlayerTurn";


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
      "total_songs": 16  
    }



    let initAmountOfTracks = gameRules["no_of_tracks"][dataJSON["no_of_players"]];


    let tracksRemaining = {}

    for(let i = 0; i<dataJSON["no_of_players"]; i++) {

        tracksRemaining[`player_${i+1}`] = initAmountOfTracks;

    }

    console.log("TRACKS REMAINING", tracksRemaining);

    let [_tracksRemaining, setTracksRemaining] = useState(tracksRemaining);

    // setTracksRemaining(tracksRemaining["player_1"] -= 1)

    // let tracksRemaining = {
    //   "player_1": initAmountOfTracks,
    //   "player_2": initAmountOfTracks
    // }

    function generateQueue(no_of_players) {


      const numbers = Array.from({length: no_of_players}, (_, i) => i + 1)

      return numbers;


    }

    let queue = generateQueue(no_of_players)

    let [queueNumber, setQueueNumber] = useState(queue[0])

    // console.log(dataJSON)
    console.log("QUEUE", queue)    

    


    let songStack = []

    for (let i=0; i<gameRules["total_songs"]; i++) {
      songStack.push(`${i+1}`);
    } 

    // function groupByPairs(arr) {
    //   return arr.length % 2 === 0
    //     ? arr.map((_, i) => arr.slice(i, i + 2))
    //     : arr.map((_, i) => arr.slice(i, i + 2)).concat([[arr[arr.length - 1]]]);
    // }


    let [chosenInput, setChosenInput] = useState(0);



    return (
      <div className="max-w-5xl h-screen m-auto">
        {/* <p className="text-white">{JSON.stringify(dataJSON)}</p>
        <p className="text-white">{queue}</p> */}

        
    
        <GameBrackets songStack={songStack} chosenInput={chosenInput} setChosenInput={setChosenInput}/>

        <PlayerTurn number={queueNumber}  setQueueNumber={setQueueNumber} songNumber={songStack[chosenInput]} name={dataJSON[`player_${queueNumber}`]} />
        

   
      </div>

  )
}