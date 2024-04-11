export default function Bracket() {



    return (
        <div className="flex justify-around text-sm">
            
            <div id="left-bracket" className="text-white [&>*]:flex justify-evenly [&>*]:flex-col [&>*]:my-6 [&>div>div]:p-3">
                <div className="">
                    <div className="border-b-4 border-b-white">Journey - Dont Stop Believin</div>
                    <div className="border-r-4 border-r-white">Michael Jackson - Billie Jean</div>
                </div>
                <div>
                    <div  className="border-b-4 border-b-white border-r-4 border-r-white">Maroon 5 - Sugar</div>
                    <div className="border-r-4 border-r-white">Gryffin - All You Need To Know</div>
                </div>
                <div>
                    <div  className="border-b-4 border-b-white border-r-4 border-r-white">Kygo - Whatever</div>
                    <div className="border-r-4 border-r-white">Taylor Swift - Blank Space</div>
                </div>
                <div>
                    <div  className="border-r-4 border-r-white border-b-4 border-b-white">Laura Branigan - Self Control</div>
                    <div className="">Phil Collins - Another Day In Paradise</div>
                </div>
            </div>

            

            <div id="right-bracket" className="text-white [&>*]:flex justify-evenly [&>*]:flex-col [&>*]:my-6 [&>div>div]:p-3 text-right">
                <div>
                    <div className="border-b-4 border-b-white">The Chainsmokers - Closer</div>
                    <div  className="border-l-4 border-l-white">Bastille - Pompeii</div>
                </div>
                <div>
                    <div  className="border-l-4 border-b-4 border-b-white">Marshmello - Alone</div>
                    <div className="border-l-4 border-l-white">Alan Walker - Faded</div>
                </div>
                <div>
                    <div  className="border-l-4 border-b-4 border-b-white">Tears For Fears - Everybody Wants To Rule The World</div>
                    <div className="border-l-4 border-l-white">The Prodigy - Breathe</div>
                </div>
                <div>
                    <div  className="border-l-4 border-b-4 border-b-white">ILLENIUM - Fractures</div>
                    <div className="">Adele - Hello</div>
                </div>
            </div>
           

        </div>
    )


}