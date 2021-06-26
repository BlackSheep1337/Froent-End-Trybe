import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';

export default function Item({ list, handleDelete, handleCompleted, isCompleted }) {
  return (
    <>
      {list.map(({ title, id }) => {
        return <article key={ id } className={`${isCompleted ? 'item completed' : 'item'}`}>
            { title }
          <div className="btn-container">
            <button onClick={() => handleDelete(id)} className="delete-btn">
              <DeleteIcon />
            </button>
            <button onClick={() => handleCompleted(id)} className="completed-btn">
              <CheckIcon />
            </button>
          </div>
        </article>
      })}
    </>
  )
}
