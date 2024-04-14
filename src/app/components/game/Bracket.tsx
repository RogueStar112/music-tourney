import { useState } from "react";

export default function Bracket({item, isFlipped, isDisabled, halfIndex, chosenInput, setChosenInput}) {

    // Bracket V3

    let [_isDisabled, setIsDisabled] = useState(isDisabled)
    
    function onSubmit(e) {
        e.preventDefault();
        
        

        setChosenInput(chosenInput+1);
        // setIsDisabled(!isDisabled);

        // if(chosenInput == 8) {
        //     setChosenInput(9);
                
        // }
    }

    return (
        <form onSubmit={onSubmit} className={`flex ${isFlipped ? `flex-row-reverse` : ``} justify-between m-2`} key={item}>
                                      {item}
                      <input className={`bg-slate-600 border-2 border-slate-200 ${isFlipped ? `mr-2` : `ml-2`} ${(item >= chosenInput+1) ? `bg-green-600` : `` }`}  id={`song-${item}`} name={`song-${item}`} disabled={parseInt(item) > chosenInput+1}></input>
        </form>
    )


}