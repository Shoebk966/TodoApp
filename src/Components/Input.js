import React from 'react'
import { useGlobalContext } from './Context';
import { FaPlusSquare , FaEdit } from "react-icons/fa";

const Input = () => {
    const {name , setName, Handlesubmit , isEditing} = useGlobalContext();

  return (
    <div>
    <div className='row'>
    <div className='col-10'>
<input type='text' className="inp" name='name' value={name} onChange={(e) => setName(e.target.value)} /> </div>
<div className='col-2'>
<div className="add-btn"  onClick={Handlesubmit}> {isEditing ? <FaEdit /> : <FaPlusSquare />}  </div> </div>
    </div>
    </div>
  )
}

export default Input