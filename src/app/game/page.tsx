"use client";

import { FormEvent } from "react";

import { useState, useEffect } from "react";

import PlayerForm from "../components/PlayerForm";

export default function Page() {



    async function onSubmit(e: any) {
    e.preventDefault();

      const formData = new FormData(e.target)

      // console.log(formData);
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json() 

      console.log(data);
  } 

  return (



      <PlayerForm />

  );
}
