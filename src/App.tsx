import { useState } from 'react';
import { HangmanDrawing } from './components/HangmanDrawing';
import words from './wordList.json';

function App() {
  const [wordToGuest, setWordtoGuest] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  return (
    <div className="flex items-center flex-col gap-8 m-w-[800px] font-serif font-normal py-5 mx-auto my-0">
      <div className="text-2xl font-semibold text-center">Win/Lose</div>
      <HangmanDrawing />
    </div>
  );
}

export default App;
