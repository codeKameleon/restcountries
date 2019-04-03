import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Countries from './Countries';
import EuropeanCountries from './EuropeanCountries';
import SearchCountries from './SearchCountries';
import './Main.css';

export default class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Route exact path="/" component={Countries} />
        <Route path="/eu-countries" component={EuropeanCountries} />
        <Route path="/search-countries" component={SearchCountries} />
      </main>
    );
  }
}
