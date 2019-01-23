import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Artists from './components/Artists/Artists';
import MainLayout from './components/hoc/MainLayout';
import PageNotFound from './components/PageNotFound/PageNotFound';

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/artists" component={Artists} />
        <Route component={PageNotFound} />
      </Switch>
    </MainLayout>
  )
}

export default App;