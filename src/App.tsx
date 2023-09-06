import { useCallback, useEffect, useState } from 'react';
import { HangmanDrawing } from './components/HangmanDrawing';
import { HangmanWord } from './components/HangmanWord';
import { Keyboard } from './components/Keyboard';
import words from './wordList.json';

function App() {
  const [wordToGuest, setWordtoGuest] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const inCorrectLetters = guessedLetters.filter((letter) => !wordToGuest.includes(letter));

  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuest.split('').every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  return (
    <div className="flex items-center flex-col gap-8 m-w-[800px] font-serif font-normal py-5 mx-auto my-0">
      <div className="text-2xl font-semibold text-center">
        {isLoser && 'Nice try - Refresh page and try again'}
        {isWinner && 'Congratulations, you are won - Refresh page and try again'}
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuest={wordToGuest} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          activeLetter={guessedLetters.filter((letter) => wordToGuest.includes(letter))}
          inactiveLetters={inCorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
