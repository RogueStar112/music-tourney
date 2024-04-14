export default function PlayerTurn({number, name, songNumber, setQueueNumber}) {

  

  return (
    <>
      <h2 className="text-2xl text-center">{name}'s Turn (Player {number}) </h2>
      <p className="text-center">Input a song on Slot {songNumber}.</p>
    </>
  )
}