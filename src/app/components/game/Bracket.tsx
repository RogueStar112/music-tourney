import { useState } from "react";

export default function Bracket({item, songStack, gamePhase, setGamePhase, name, setSongStack, isFlipped, isDisabled, halfIndex, chosenInput, setChosenInput}) {

    // Bracket V3

    let [_isDisabled, setIsDisabled] = useState(isDisabled)
    
    let [inputValue, setInputValue] = useState('');

    let [votes, setVotes] = useState(0);

    function onSubmit(e) {

        // if (gamePhase === 1) { 
        //     e.preventDefault();
        // }

        // const newFormData = new FormData(e.target);

        // console.log('BRACKET FORM DATA', newFormData);

        const songInQuestion = document.getElementById(`song-${item}`).value;
        
        console.log('Submitting... Also, gamephase is:', gamePhase, 'and choseninput is:', chosenInput, `and number of votes for the song: ${songInQuestion}`,  votes)

        
        // ELIMINATION PHASE SETUP
        // if(gamePhase == 0 && chosenInput>15) {
        //     setGamePhase(1);
        //     setChosenInput(0);
        // }

        // INPUT PHASE
        if(gamePhase == 0 && chosenInput<=15) {
            
            setChosenInput(chosenInput+1);
        }


        
        

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
        <form id={`form-id-${item}`} onKeyDown={(e) => { if (e.key === 'Enter') { onSubmit(e); }}} onSubmit={onSubmit}  className={`flex ${isFlipped ? `flex-row-reverse` : ``} justify-between m-2`} key={item}>
                                      {item}
                      <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} className={`bg-slate-600 border-2 border-slate-200 ${isFlipped ? `mr-2` : `ml-2`} ${(item == chosenInput+1) ? `bg-green-600` : `` }`}  id={`song-${item}`} name={`song-${item}`} disabled={(parseInt(item) > chosenInput+1) || parseInt(item) != chosenInput+ 1 || gamePhase != 0} ></input>
                      <input id={`vote-${item}`} name={`vote-${item}`} type="number" onChange={(e) => setVotes(parseInt(e.target.value))} value={votes} className={`${(gamePhase > 0) ? 'bg-slate-600 border-2 border-slate-200 ml-2 w-[32px] text-center' : `hidden`}`} disabled={(gamePhase == 0)}></input>
                      <input type="hidden" id={`song-id-${item}`} value={item}></input>
        </form>
    )


}