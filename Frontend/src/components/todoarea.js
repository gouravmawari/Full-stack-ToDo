import React from 'react'
import "./todoarea.css"
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
export default function Todoarea({Text,updatemode,deletetext}) {
  return (
    <>
    <div className='text-center' id='todoarea'>
        <div className='text' id='textarea'>{Text}</div>
        <div className='icons'>
            <BiEdit className="icon" onClick={updatemode}/>
            <AiFillDelete className="icon" onClick={deletetext}/>
            </div>        
    </div>
    </>
  )
}
