import { useState, useEffect } from "react";

export default function PlayerTurn({number, name, songNumber, chosenInput, no_of_players, setQueueNumber}) {

   useEffect(() => {
      // console.log('i fire once')
      if (number == no_of_players) {
        console.log('QUEUE NUMBER RESET')
        setQueueNumber(1);
      } else {
        console.log('Q NUMBER ADDED')
        setQueueNumber(number+1)
      }

    }, [chosenInput])

  return (
    <>
      <h2 className="text-2xl text-center">{name}'s Turn (Player {number}) </h2>
      <p className="text-center">Input a song on Slot {songNumber}.</p>
    </>
  )
}