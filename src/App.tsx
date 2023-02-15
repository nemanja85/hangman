import { useState } from 'react';
import words from './wordList.json';

function App() {
  const [wordToGuest, setWordtoGuest] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  return (
    <div className="flex items-center flex-col gap-8 m-w-[800px] mx-auto my-0 font-serif font-normal">
      <div className="text-md text-center font-semibold">Win/Lose</div>
    </div>
  );
}

export default App;
