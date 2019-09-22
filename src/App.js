import React from 'react';
import './App.scss';

// import MainContainer from './containers/MainContainer/MainContainer'
import SearchPage from './components/SearchPage/SearchPage'
import SearchResult from './components/SearchResult/SearchResult'
import VideoDisplay from './components/VideoDisplay/VideoDisplay'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SearchPage} exact />
        <Route path="/search-result/:query" component={SearchResult} exact />
        <Route path="/video-display/:videoId" component={VideoDisplay} exact />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
