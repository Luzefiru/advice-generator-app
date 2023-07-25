import React from 'react';

interface PropTypes {
  clickHandler: () => void;
}

function RandomizeButton({ clickHandler }: PropTypes) {
  return (
    <button
      onClick={clickHandler}
      className="absolute bottom-0 grid -translate-x-1/2 translate-y-1/2 rounded-full RandomizeButton left-1/2 w-14 h-14 bg-primary place-items-center"
    >
      <div className="grid w-5 h-5 leading-none rounded bg-on-primary text-primary place-items-center">
        <div className="-translate-y-[12.5%]">&#8281;</div>
      </div>
    </button>
  );
}

export default RandomizeButton;
