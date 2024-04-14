export default function Bracket({item, isDisabled, halfIndex}) {

    // Bracket V3
    
    function onSubmit(e) {
        e.preventDefault();


    }

    return (
        <form onSubmit={onSubmit} className="flex justify-between m-2" key={item}>
                                      {item}
                      <input className="bg-slate-600 border-2 border-slate-200 ml-2"  id={`song-${item}`} name={`song-${item}-${halfIndex}`} disabled={isDisabled ? true : false}></input>
        </form>
    )


}