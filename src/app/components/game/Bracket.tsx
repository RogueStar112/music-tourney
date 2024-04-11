export default function Bracket() {



    return (
        <div className="flex justify-around">
            
            <div id="left-bracket" className="text-white [&>*]:flex justify-evenly [&>*]:flex-col [&>*]:gap-4 [&>*]:border-r-white [&>*]:border-r-2 [&>*]:[&>*]:border-b-white [&>*]:[&>*]:border-b-2 gap-4">
                <div>
                    <div>Journey - Dont Stop Believin</div>
                    <div>Michael Jackson - Billie Jean</div>
                </div>
                <div>
                    <div>Kings Of Leon - S*x On Fire</div>
                    <div>Gryffin - All You Need To Know</div>
                </div>
                <div>
                    <div>Kygo - Whatever</div>
                    <div>Taylor Swift - Blank Space</div>
                </div>
                <div>
                    <div>Laura Branigan - Self Control</div>
                    <div>Phil Collins - Another Day In Paradise</div>
                </div>
            </div>


            <div id="right-bracket" className="text-white [&>*]:flex [&>*]:flex-col [&>*]:gap-4 [&>*]:border-r-white [&>*]:border-l-2 [&>*]:[&>*]:border-l-white [&>*]:[&>*]:border-b-2 gap-4">
                <div>
                    <div>The Chainsmokers - Closer</div>
                    <div>Bastille - Pompeii</div>
                </div>
                <div>
                    <div>Marshmello - Alone</div>
                    <div>Alan Walker - Faded</div>
                </div>
                <div>
                    <div>Tears For Fears - Everybody Wants To Rule The World</div>
                    <div>The Prodigy - Breathe</div>
                </div>
                <div>
                    <div>ILLENIUM - Fractures</div>
                    <div>Adele - Hello</div>
                </div>
            </div>
           

        </div>
    )


}