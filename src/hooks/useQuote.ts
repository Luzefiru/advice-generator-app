import axios from 'axios';
import { useState, useEffect } from 'react';
const baseUrl = 'https://api.adviceslip.com/advice';

const useQuote = () => {
  const [id, setId] = useState('???');
  const [quote, setQuote] = useState('Loading...');
  const [loading, setLoading] = useState(true);

  const randomizeQuote = () => {
    setLoading(true);

    axios.get(baseUrl).then((res) => {
      setId(res.data.slip.id);
      setQuote(res.data.slip.advice);
      setLoading(false);
    });
  };

  useEffect(() => {
    randomizeQuote();
  }, []);

  return {
    quote: `“${quote}”`,
    id: loading ? '???' : id,
    randomizeQuote,
    loading,
  };
};

export default useQuote;
