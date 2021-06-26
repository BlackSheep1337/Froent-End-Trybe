import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
interface IThemeContext {
  theme: string;
  setTheme: any;
}
export const ThemeContext = React.createContext({} as IThemeContext);

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}
