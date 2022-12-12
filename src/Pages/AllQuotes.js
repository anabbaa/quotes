import React , {useEffect} from "react";
import QuoteList from '../components/Quotes/QuoteList';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuetsFound from "../components/Quotes/NoQuotesFound";
import useHttp from '../Hooks/use-http';
import { getAllQuotes } from '../Lib/api';

const AllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(
    getAllQuotes,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuetsFound/>;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;