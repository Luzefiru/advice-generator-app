import React from 'react';

function Divider() {
  return (
    <div className="relative flex items-center justify-center my-10">
      <div className="absolute flex gap-2 p-4 bg-foreground">
        <div className="w-2 h-5 rounded-full bg-on-foreground" />
        <div className="w-2 h-5 rounded-full bg-on-foreground" />
      </div>
      <hr className="w-full border-accent" />
    </div>
  );
}

export default Divider;
