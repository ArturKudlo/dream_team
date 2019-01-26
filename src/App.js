import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Directors from './components/Directors/Directors';
import DirectorDetail from './components/Directors/DirectorDetail/DirectorDetail';
import MainLayout from './components/hoc/MainLayout';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';

class App extends Component {
  state = {
    language: 'en'
  }

  setLanguage = language => {
    this.setState({ language });
  }

  render() {
    const { language } = this.state;

    return (
      <div>
        <Header
          setLanguage={this.setLanguage}
        />
        <MainLayout>
          <Switch>
            <Route path="/" exact render={(routeProps) => <Home {...routeProps} language={language} />} />
            <Route path="/directors/:id" exact render={(routeProps) => <DirectorDetail {...routeProps} language={language} />} />
            <Route path="/directors" exact render={(routeProps) => <Directors {...routeProps} language={language} />} />
            <Route component={PageNotFound} />
          </Switch>
        </MainLayout>
      </div>
    )
  }
}

export default App;