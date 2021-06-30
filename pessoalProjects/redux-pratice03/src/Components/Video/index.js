import React from 'react';
import { connect } from 'react-redux';

function Video({ activeLesson, activeModule }) {
  return (
    <div>
      <h3>{ activeLesson.title }</h3>
      <span>Module { activeModule.title }</span>
    </div>
  )
}

export default connect(state => ({
  activeLesson: state.activeLesson,
  activeModule: state.activeModule,
}))(Video);
