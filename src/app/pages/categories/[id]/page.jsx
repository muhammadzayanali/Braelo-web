'use client'

import React from 'react';
import { useParams } from 'next/navigation';

function Subcatogory() {
    const params = useParams();
    const {id} = params;

    console.log("SLUG", id)


  return (
    <div>page: {id}</div>
  )
}

export default Subcatogory;