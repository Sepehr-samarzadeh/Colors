import './index.css';
import Content from './Content';
import SearchItem from './SearchItem';
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)


  return (
    <div className="App">
      <Content colorValue={colorValue} isDarkText={isDarkText} />
      <SearchItem colorValue={colorValue} setColorValue={setColorValue} isDarkText={isDarkText} setIsDarkText={setIsDarkText}/>
    </div>
  );
}

export default App;
