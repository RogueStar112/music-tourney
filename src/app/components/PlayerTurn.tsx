export default function PlayerTurn({number, name, setQueueNumber}) {
  return (
    <>
      <h2 className="text-2xl">{name}'s Turn (Player {number}) </h2>
    </>
  )
}