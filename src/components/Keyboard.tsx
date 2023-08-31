const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export function Keyboard() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5px',
      }}
    >
      {KEYS.map((key) => {
        return (
          <button
            className="w-full p-3 text-2xl font-bold uppercase bg-transparent border-2 border-black cursor-pointer aspect-square hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white active:bg-gray-800 active:text-white"
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
