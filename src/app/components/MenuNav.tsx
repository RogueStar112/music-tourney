import { useState, useEffect } from "react"

export default function MenuNav() {


    return (
     <div className="flex justify-between gap-4 mt-4 [&>*]:rounded-full">  

          <a className="bg-green-500 p-4" href="./start">START</a>
          <a className="bg-gray-500 p-4">HELP</a>

     </div>
    )
}