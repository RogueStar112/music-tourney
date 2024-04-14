import { useState, useRef, useEffect } from "react";
import Bracket from "./Bracket";

export default function GameBrackets({songStack, chosenInput, setChosenInput, setQueueNumber}) {

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

          // console.log("EL1", element1, "EL2", element2); 
        }

        for  (let i = 0; i < secondHalf.length-1; i+=2) {

          secondHalfRows.push([secondHalf[i], secondHalf[i+1]])

        }

        let [firstHalfState, setFirstHalfState] = useState(firstHalf);
        let [secondHalfState, setSecondHalfState] = useState(secondHalf);
 
        console.log("FHR", firstHalfRows);
        console.log("SHR", secondHalfRows);

        const dummyForFutureBrackets = [["1", "2"], ["3", "4"]];

        const dummyForSemiHalfBrackets = [["1", "2"]];
        const dummyForFinalBracket = [["1", "2"]];

        console.log('FIRST HALF STATE', firstHalfState);
        console.log('SECOND HALF STATE', secondHalfState);

        let inputRefs = useRef([])

         useEffect(() => {
          inputRefs.current = Array(16).fill().map((_, i) => inputRefs.current[i] || `song-${i}`
        )}, []);

        console.log("INPUT REFS", inputRefs)
          

        function startTurn() {




        }


        return (
          
          <div className="flex justify-between  mx-auto text-sm [&>*>*>input]:text-white">
            <section id="left-bracket">  

                <h2 className="text-white text-center">Round 1</h2>
  
                {firstHalfRows.map((item, index) => (

                  
                  <div className="border-t-2 border-r-2 border-b-2 my-3" key={`${item[0]}${item[1]}-${index}`}>

                    
                    
                    <Bracket item={item[0]} isDisabled={false} halfIndex={firstHalfState[item[0]-1]} chosenInput={chosenInput} setChosenInput={setChosenInput}/>

                    <Bracket item={item[1]} isDisabled={false} halfIndex={firstHalfState[item[1]-1]} chosenInput={chosenInput} setChosenInput={setChosenInput}/>


                  </div>
                  
                ))}
            </section>

            <section id="left-bracket-second" className="flex flex-col">

              <h2 className="text-white text-center ">Round 3</h2>
                  
                  <div className="flex flex-col grow justify-around">
                  {dummyForFutureBrackets.map((item, index) => (
                    <div  className="border-t-2 border-r-2 border-b-2 my-3" key={`3-${index}`}>

                                      
                      <Bracket item={`lbs-${item[0]}`} isDisabled={true} halfIndex={`lbs-${item[0]}`} chosenInput={chosenInput} setChosenInput={setChosenInput}/>

                      <Bracket item={`lbs-${item[1]}`} isDisabled={true} halfIndex={`lbs-${item[1]}`} chosenInput={chosenInput} setChosenInput={setChosenInput}/>


                    </div>
                  ))}
                  </div>


        

            </section>

            <section id="left-bracket-third" className="flex flex-col">

              <h2 className="text-white text-center ">Round 5</h2>
                  
                  <div className="flex flex-col grow justify-center">
                  {dummyForSemiHalfBrackets.map((item, index) => (
                    <div  className="border-t-2 border-r-2 border-b-2 py-14" key={`3-${index}`}>

                                      
                      <Bracket item={`lbt-${item[0]}`} isDisabled={true} halfIndex={`lbt-${item[0]}`} chosenInput={chosenInput} setChosenInput={setChosenInput}/>

                      <Bracket item={`lbt-${item[1]}`} isDisabled={true} halfIndex={`lbt-${item[1]}`} chosenInput={chosenInput} setChosenInput={setChosenInput}/>


                    </div>
                  ))}
                  </div>


        

            </section>


            <section id="final-bracket" className="flex flex-col content-center">

              <h2 className="text-white text-center">Finals</h2>
              
              <div className="flex flex-col grow justify-center [&>div]:m-12">
              {dummyForFinalBracket.map((item, index) => (
                    <div  key={`${item}-${index}`}>
                      <Bracket item={`fb-${item[0]}`} isDisabled={true} halfIndex={`fb-${item[0]}`} chosenInput={chosenInput} setChosenInput={setChosenInput}/>

                      <Bracket item={`fb-${item[1]}`} isDisabled={true} halfIndex={`fb-${item[1]}`} chosenInput={chosenInput} setChosenInput={setChosenInput}/>


                    </div>
                  ))}
              </div>

            </section>

          
            <section id="right-bracket-third" className="flex flex-col content-around">

              <h2 className="text-white text-center">Round 6</h2>

              <div className="flex flex-col grow justify-center">
              {dummyForSemiHalfBrackets.map((item, index) => (
                    <div  className="border-t-2 border-l-2 border-b-2 py-14" key={`${item[0]}${item[1]}-${index}`}>
                    <Bracket item={`rbt-${item[0]}`} isFlipped={true} isDisabled={true} halfIndex={`rbt-${item[0]}`} chosenInput={chosenInput} setChosenInput={setChosenInput}/>

                    <Bracket item={`rbt-${item[1]}`} isFlipped={true} isDisabled={true} halfIndex={`rbt-${item[1]}`} chosenInput={chosenInput} setChosenInput={setChosenInput}/>

                    </div>
                  ))}  
              </div>


            </section>

            <section id="right-bracket-second" className="flex flex-col content-around">

              <h2 className="text-white text-center">Round 4</h2>

              <div className="flex flex-col grow justify-around">
              {dummyForFutureBrackets.map((item, index) => (
                    <div  className="border-t-2 border-l-2 border-b-2 my-3" key={`${item[0]}${item[1]}-${index}`}>
                    <Bracket item={`rbs-${item[0]}`} isFlipped={true} isDisabled={true} halfIndex={`rbs-${item[0]}`} chosenInput={chosenInput} setChosenInput={setChosenInput}/>

                    <Bracket item={`rbs-${item[1]}`} isFlipped={true} isDisabled={true} halfIndex={`rbs-${item[1]}`} chosenInput={chosenInput} setChosenInput={setChosenInput}/>

                    </div>
                  ))}  
              </div>


            </section>


            <section id="right-bracket">  

              <h2 className="text-white text-center">Round 2</h2>
                {secondHalfRows.map((item, index) => (
                
                  <div className="border-t-2 border-b-2 border-l-2 my-3"  key={`${item[0]}${item[1]}-${index}`}>
                  
                      <Bracket item={item[0]} isFlipped={true} isDisabled={true} halfIndex={secondHalfState[index]}  chosenInput={chosenInput} setChosenInput={setChosenInput}/>

                      <Bracket item={item[1]} isFlipped={true} isDisabled={true} halfIndex={secondHalfState[index]}  chosenInput={chosenInput} setChosenInput={setChosenInput}/>

                  </div>
                ))}
            </section>
          </div>
        )

    
}