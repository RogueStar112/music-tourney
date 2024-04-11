"use client";

import { FormEvent } from "react";

import { useState, useEffect } from "react";

import PlayerForm from "../components/PlayerForm";
import Game from "../game/page";


export default function Page() {

  let [formCompleted, setFormCompleted] = useState(false); 

  let [formData, setFormData] = useState({});

  useEffect(() => {
    console.log('Form completed')
    console.log('New form data', formData)
  }, [formCompleted, formData])
  
  if (formCompleted) {
    return (


        
        
        <Game data={formData}/>

    );

    } else {

      return (
        <PlayerForm completed={formCompleted} setCompleted={setFormCompleted} formData={formData} setFormData={setFormData} />
      )
  }
}
