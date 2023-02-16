const head = (
  <div className="absolute border-8 border-gray-800 border-solid rounded-full w-14 h-14 -right-5 top-11"></div>
);
const body = <div className="absolute right-0 w-3 h-24 bg-gray-800 top-24"></div>;
const rightArm = <div className="absolute w-24 h-3 origin-bottom-left -rotate-45 bg-gray-800 top-36 -right-24"></div>;
const leftArm = <div className="absolute w-24 h-3 origin-bottom-right rotate-45 bg-gray-800 top-36 right-3"></div>;
const rightLeg = <div className="absolute w-24 h-3 origin-bottom-left rotate-45 bg-gray-800 top-44 -right-20"></div>;
const leftLeg = <div className="absolute right-0 w-24 h-3 origin-bottom-right -rotate-45 bg-gray-800 top-44"></div>;

export function HangmanDrawing() {
  return (
    <div className="relative">
      {head}
      {body}
      {rightArm}
      {leftArm}
      {rightLeg}
      {leftLeg}
      <div className="absolute top-0 right-0 w-3 h-12 bg-slate-800"></div>
      <div className="h-3 ml-32 bg-gray-800 w-52"></div>
      <div className="w-3 ml-32 bg-gray-800 h-96"></div>
      <div className="w-64 h-3 bg-gray-800"></div>
    </div>
  );
}
