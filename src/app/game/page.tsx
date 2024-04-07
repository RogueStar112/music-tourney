
"use client";

import { useState, useEffect } from "react";

import { useSearchParams } from 'next/navigation'

export default function Game() {

    const searchParams = useSearchParams();

    const getPlayers = searchParams.get('players');


    

    return (
      <>
        {getPlayers}
      </>

  )
}