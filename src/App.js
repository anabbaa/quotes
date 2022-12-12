import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './Pages/AllQuotes';
import QuoteDetail from './Pages/QuoteDetails';
import NewQuote from './Pages/NewQuote';
import Layout from "./components/Layout/Layout";
import NotFound from "./Pages/NotFound"

function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <Redirect to="/quotes"/>
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetail />
      </Route>
      <Route path='/new-quote'>
        <NewQuote />
      </Route>
      <Route path='*'>
          <NotFound />
        </Route>
    </Switch>
    </Layout>
  );
}

export default App;