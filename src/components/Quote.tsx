import React from 'react';

interface PropTypes {
  children: string;
}

function Quote({ children }: PropTypes) {
  return (
    <p className="text-on-foreground text-[26px] sm:text-[28px] text-center leading-10">
      “{children}”
    </p>
  );
}

export default Quote;
