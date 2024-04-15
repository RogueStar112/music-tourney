import { useState } from "react";

export default function Bracket({item, songStack, name, setSongStack, isFlipped, isDisabled, halfIndex, chosenInput, setChosenInput}) {

    // Bracket V3

    let [_isDisabled, setIsDisabled] = useState(isDisabled)
    
    let [inputValue, setInputValue] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        
         

        setChosenInput(chosenInput+1);

        // const newSongStack = songStack.map((c, i) => {

        //     if (i == item-1) {


        //         return inputValue;
 
        //     } else {

        //         return c 

        //     }

        // })

        // setSongStack(newSongStack);

        
        // setIsDisabled(!isDisabled);

        // if(chosenInput == 8) {
        //     setChosenInput(9);
                
        // }
    }

    return (
        <form id={`form-id-${item}`} onSubmit={onSubmit}  className={`flex ${isFlipped ? `flex-row-reverse` : ``} justify-between m-2`} key={item}>
                                      {item}
                      <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} className={`bg-slate-600 border-2 border-slate-200 ${isFlipped ? `mr-2` : `ml-2`} ${(item == chosenInput+1) ? `bg-green-600` : `` }`}  id={`song-${item}`} name={`song-${item}`} disabled={(parseInt(item) > chosenInput+1) || parseInt(item) != chosenInput+1}></input>
        </form>
    )


}