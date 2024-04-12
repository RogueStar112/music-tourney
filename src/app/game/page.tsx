


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

      return numbers


    }

    let queue = generateQueue(no_of_players)

    // console.log(dataJSON)
    // console.log("QUEUE", queue)    

    

    let songStack = []

    for (let i=0; i<gameRules["total_songs"]; i++) {
      songStack.push(`${i+1}`);
    } 

    function groupByPairs(arr) {
      return arr.length % 2 === 0
        ? arr.map((_, i) => arr.slice(i, i + 2))
        : arr.map((_, i) => arr.slice(i, i + 2)).concat([[arr[arr.length - 1]]]);
    }


    function renderSongBrackets() {

        const arrayHalf = Math.ceil(songStack.length / 2);

        let firstHalf = songStack.slice(0, arrayHalf);
        let secondHalf = songStack.slice(arrayHalf);

        console.log("FH", firstHalf)
        console.log("SH", secondHalf)

        const firstHalfRows = [];
        const secondHalfRows = [];

        for  (let i = 0; i < firstHalf.length-1; i+=2) {

          firstHalfRows.push([firstHalf[i], firstHalf[i+1]])

          const element1 = firstHalf[i];
          const element2 = firstHalf[i + 1]; 

          console.log("EL1", element1, "EL2", element2); 
        }

        for  (let i = 0; i < secondHalf.length-1; i+=2) {

          secondHalfRows.push([secondHalf[i], secondHalf[i+1]])

        }

        console.log("FHR", firstHalfRows);
        console.log("SHR", secondHalfRows);


        return (
          
          <div className="flex justify-around text-sm [&>*>*>input]:text-white">
            <div id="left-bracket">  
              
  
                {firstHalfRows.map((item, index) => (

                  
                  <div className="border-t-2 border-r-2 border-b-2 my-3">


                  
                    <div className="flex justify-between m-2" key={item[0]}>
                                      {item[0]}
                      <input className="bg-slate-600 border-2 border-slate-200 ml-2"  id={`song-${item[0]}`}></input>
                    </div>

                    <div className="flex justify-between m-2" key={item[1]}>
                                      {item[1]}
                      <input className="bg-slate-600 border-2 border-slate-200 ml-2"  id={`song-${item[1]}`}></input>
                    </div>


                  </div>
                  
                ))}
            </div>


            <div id="right-bracket">  
                {secondHalfRows.map((item, index) => (
                
                  <div className="border-t-2 border-b-2 border-l-2 m-3">


                  
                    <div className="flex justify-between m-2 flex-row-reverse" key={item[0]}>
                                      {item[0]}
                      <input className="bg-slate-600 border-2 border-slate-200 mr-2"  id={`song-${item[0]}`}></input>
                    </div>

                    <div className="flex justify-between m-2 flex-row-reverse" key={item[1]}>
                                      {item[1]}
                      <input className="bg-slate-600 border-2 border-slate-200 mr-2"  id={`song-${item[1]}`}></input>
                    </div>


                  </div>
                ))}
            </div>
          </div>
        )

    }

    function takeTurn() {

      

    }


    return (
      <>
        <p className="text-white">{JSON.stringify(dataJSON)}</p>
        <p className="text-white">{queue}</p>
        {renderSongBrackets()}
      </>

  )
}