type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuest: string;
};

export function HangmanWord({ guessedLetters, wordToGuest }: HangmanWordProps) {
  const word = 'test';
  //const guessedLetters = ['e', 'n', 's', 'm', 'p'];
  return (
    <div className="flex gap-5 font-mono font-bold uppercase text-7xl text-slate-800">
      {wordToGuest.split('').map((letter, idx) => (
        <span className="border-b-4 border-solid border-slate-800" key={idx}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
