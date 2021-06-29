import React, { useState } from 'react'

const inicialState = [
{
  title: 'Iniciando em React',
  id: 1,
  lessons: [
    {id: 1, title: 'primeira aula'},
    {id: 2, title: 'segunda aula'}
  ]
},
  {
    title:'Aprendendo Redux',
    id: 2,
    lessons: [
      {id: 3, title: 'terceira aula'},
      {id: 4, title: 'quarta aula'}
    ]
  }

]

export default function Sidebar() {
  const [list, setList] = useState(inicialState);

  console.log(list);
  return (
    <aside>
        {list.map(({ title, lessons, id }) => {
          return (
          <div key={ id }>
            <strong>{ title }</strong>
            <ul>
              {lessons.map(({ title, id }) => (
                <li key={ id }>{ title }</li>
              ))}
            </ul>
          </div>
          );
        })}
    </aside>
  )
}
