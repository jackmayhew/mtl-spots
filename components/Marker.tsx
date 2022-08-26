import React from 'react'
import { GrLocationPin } from "react-icons/gr";

function Marker({lat, lng}) {
  return (
    <div><GrLocationPin/></div>
  )
}

export default Marker