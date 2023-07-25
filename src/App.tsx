import React from 'react';
import Divider from './components/Divider';
import Quote from './components/Quote';
import RandomizeButton from './components/RandomizeButton';
import './App.css';
import { useState } from 'react';

function App() {
  const [quote, setQuote] = useState(
    `It is easy to sit up and take notice, what's difficult is getting up and taking action`
  );

  const handleRandomizeClick = () => setQuote(quote);

  return (
    <main className="grid h-full font-sans App place-items-center">
      <section className="max-w-[50ch] p-6 pt-9 m-4 sm:p-10 bg-foreground shadow-2xl rounded-xl relative flex justify-center flex-col">
        <h1 className="text-xs tracking-[0.3em] uppercase text-primary text-center mb-5">
          Advice #117
        </h1>
        <Quote>{quote}</Quote>
        <Divider />
        <RandomizeButton clickHandler={handleRandomizeClick} />
      </section>
    </main>
  );
}

export default App;
