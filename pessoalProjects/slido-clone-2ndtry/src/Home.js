import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import Questions from './Questions';
import Poll from './Poll';

export default function Home() {
  const [underlined, setUnderlined] = useState(true);

  const handleClick = () => {
    setUnderlined(!underlined);
  }

  return (
    <section className="section-center">
      <nav className="nav-container">
      <h1>Slido Clone</h1>
        <ul className="nav-style">
          <Link
            onClick={handleClick}
            className={`nav-item ${underlined ? `underlined` : ''}`}
            to="/questions">
            <li>
              <QuestionAnswerOutlinedIcon />
              Questions
            </li>
          </Link>
          <Link
            onClick={handleClick}
            className={`nav-item ${!underlined ? 'underlined' : ''}`}
            to="/polls">
            <li>
              <PollOutlinedIcon />
              Polls
            </li>
          </Link>
        </ul>
      </nav>
      { underlined ? <Questions /> : <Poll /> }
    </section>
  )
}
