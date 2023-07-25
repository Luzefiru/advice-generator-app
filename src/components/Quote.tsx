import React from 'react';

interface PropTypes {
  children: string | JSX.Element;
}

function Quote({ children }: PropTypes) {
  return (
    <p className="text-on-foreground text-[26px] sm:text-[28px] self-center text-center leading-10">
      {children}
    </p>
  );
}

export default Quote;
