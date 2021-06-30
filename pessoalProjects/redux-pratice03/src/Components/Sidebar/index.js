import React from 'react'
import { connect } from 'react-redux';



function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson,
  };
}

function Sidebar({ modules, dispatch }) {
  return (
    <aside>
      {modules.map((module) => {
        const { id, title, lessons } = module;
        return (
        <div key={ id }>
          <strong>{ title }</strong>
          <ul>
            {lessons.map((lesson) => (
              <li key={ lesson.id }>{ lesson.title }
                <button onClick={() => dispatch(toggleLesson(modules, lesson))}>
                  Arquive
                </button>
              </li>
            ))}
          </ul>
        </div>
        );
      })}
    </aside>
  )
}

export default connect(state => ({
  modules: state.modules,
  activeModule: state.activeModule,
  activeLesson: state.activeLesson
}))(Sidebar);
