const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        { id: 1, title: 'Primeira aula'},
        { id: 2, title: 'Segunda aula'}
      ]
    },
    {
      id: 2,
      title: 'Aprendendo Redux',
      lessons: [
        {id: 3, title: 'Terceira aula'},
        {id: 4, title: 'Quarta aula'}
      ]
    }
  ]
};

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'TOGGLE_LESSON':
      return { ...state, activeLesson: action.lesson, activeModule: action.module }

    default:
      return state;
  }
}
