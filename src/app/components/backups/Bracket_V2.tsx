export default function Bracket() {



    return (
        <div className="flex justify-around text-sm">
            
            <div id="left-bracket" className="text-white [&>*]:flex justify-evenly [&>*]:flex-col [&>*]:my-6 [&>div>div]:p-3 [&>div]:border-t-4 [&>div]:border-r-4 [&>div]:border-b-4 [&>div>div]:border-2 [&>div>div]:m-2 [&>div>div]:max-w-[275px]">
                <div>
                    <div className="">Journey - Dont Stop Believin</div>
                    <div className="">Michael Jackson - Billie Jean</div>
                </div>
                <div>
                    <div  className="">Maroon 5 - Sugar</div>
                    <div className="">Gryffin - All You Need To Know</div>
                </div>
                <div>
                    <div  className="">Kygo - Whatever</div>
                    <div className="">Taylor Swift - Blank Space</div>
                </div>
                <div>
                    <div  className="">Laura Branigan - Self Control</div>
                    <div className="">Phil Collins - Another Day In Paradise</div>
                </div>
            </div>

            

            <div id="right-bracket" className="text-white [&>*]:flex justify-evenly [&>*]:flex-col [&>*]:my-6 [&>div>div]:p-3 [&>div]:border-t-4 [&>div]:border-l-4 [&>div]:border-b-4 [&>div>div]:border-2 [&>div>div]:m-2 text-right [&>div>div]:max-w-[275px]">
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