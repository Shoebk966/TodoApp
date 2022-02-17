import React from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";


const List = ({ items, Deleteite , Edititem }) => {
  return (
    <div>
      <ol type="1">
        {items.map((item) => {
          const { id, title } = item

          return (
            <div className='listparent' key={id}>

              <div className='row'>
                <div className='col-10'>

                  <li> <p className='list-title'> {title}</p></li>

                </div>
                <div className='col-2'>
                  <div className='btn-container'>
                    <button type='button' className='dl-btn' onClick={() => Edititem(id)} > <FaEdit /></button>
                    <button type='button' className='edit-btn' onClick={() => Deleteite(id)}><FaTrashAlt /></button>
                  </div>
                </div>


              </div>

            </div>
          )
        })}
      </ol>
    </div>
  )
}

export default List