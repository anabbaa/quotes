import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from '../components/Quotes/QuoteForm';
import { useEffect } from 'react';
import useHttp from '../Hooks/use-http';
import { addQuote } from '../Lib/api';

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;