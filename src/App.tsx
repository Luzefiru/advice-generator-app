import React from 'react';
import Divider from './components/Divider';
import Quote from './components/Quote';
import RandomizeButton from './components/RandomizeButton';
import './App.css';
import useQuote from './hooks/useQuote';
import Spinner from './assets/spinner.svg';

function App() {
  const { quote, id, randomizeQuote, loading } = useQuote();

  const handleRandomizeClick = () => randomizeQuote();

  return (
    <main className="grid h-full font-sans App place-items-center">
      <section className="w-[calc(100%-2rem)] sm:w-[50ch] p-6 pt-9 sm:p-10 bg-foreground shadow-2xl rounded-xl relative flex justify-center flex-col">
        <h1 className="text-xs tracking-[0.3em] uppercase text-primary text-center mb-5">
          Advice #{id}
        </h1>
        <Quote>{loading ? <img src={Spinner} alt="Loading" /> : quote}</Quote>
        <Divider />
        <RandomizeButton clickHandler={handleRandomizeClick} />
      </section>
    </main>
  );
}

export default App;
