import { useState } from 'react';
import { HangmanDrawing } from './components/HangmanDrawing';
import { HangmanWord } from './components/HangmanWord';
import { Keyboard } from './components/Keyboard';
import words from './wordList.json';

function App() {
  const [wordToGuest, setWordtoGuest] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [quessedLetters, setGuessedLetters] = useState<string[]>([]);

  const inCorrectLetters = quessedLetters.filter((letter) => !wordToGuest.includes(letter));

  return (
    <div className="flex items-center flex-col gap-8 m-w-[800px] font-serif font-normal py-5 mx-auto my-0">
      <div className="text-2xl font-semibold text-center">Win/Lose</div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
