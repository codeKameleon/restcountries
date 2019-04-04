import React, { Component } from 'react';
import { Table, Input } from 'semantic-ui-react';
import './SearchCountries.css';
import 'semantic-ui-css/semantic.min.css';

export default class SearchCountries extends Component {
  state = {
    countries: [],
    search: ''
  };

  async componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ countries: data });
  }

  updateSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    let filteredCountries = this.state.countries.filter(country => {
      return country.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <div>
        <h1>Search countries</h1>

        <Input
          className="search"
          icon="search"
          placeholder="search"
          onChange={this.updateSearch}
        />

        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Capital City</Table.HeaderCell>
              <Table.HeaderCell>Alpha2 Code</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {filteredCountries.map(country => {
              return (
                <Table.Row key={country.alpha2Code}>
                  <Table.Cell>{country.name}</Table.Cell>
                  <Table.Cell>{country.capital}</Table.Cell>
                  <Table.Cell>{country.alpha2Code}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
