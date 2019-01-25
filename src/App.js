import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Directors from './components/Directors/Directors';
import DirectorDetail from './components/Directors/DirectorDetail/DirectorDetail';
import MainLayout from './components/hoc/MainLayout';
import PageNotFound from './components/PageNotFound/PageNotFound';

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/directors/:id" exact component={DirectorDetail} />
        <Route path="/directors" component={Directors} />
        <Route component={PageNotFound} />
      </Switch>
    </MainLayout>
  )
}

export default App;