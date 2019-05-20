import React from 'react';
const DeleteItem = (props)=>{
  return(
   <button onClick={props.deleteLastItem} disabled={props.buttondisabled()}>
          Delete Last Item
        </button>
  )
}
export default DeleteItem;