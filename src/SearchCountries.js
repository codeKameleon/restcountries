import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Header, Button, Popup, Grid, Input } from 'semantic-ui-react';
import './SearchCountries.css';
import 'react-table/react-table.css';
import 'semantic-ui-css/semantic.min.css';

export default class SearchCountries extends Component {
  state = {
    countries: [],
    search: ''
  };

  async componentDidMount() {
    try {
      const url = 'https://restcountries.eu/rest/v2/all';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ countries: data });
    } catch (error) {
      throw Error(error);
    }
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

    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Capital',
        accessor: 'capital'
      },
      {
        Header: 'Alpha-2 code',
        accessor: 'alpha2Code'
      }
    ];

    return (
      <div>
        <h1>Search countries</h1>

        <Input
          className="search"
          icon="search"
          placeholder="search"
          onChange={this.updateSearch}
        />

        <ReactTable
          className="-striped -highlight"
          data={filteredCountries}
          columns={columns}
          SubComponent={row => {
            return (
              <Popup trigger={<Button>More info</Button>} flowing on="click">
                <Grid centered divided padded columns="equal">
                  <Grid.Column textAlign="center">
                    <Header as="h4">Name</Header>
                    <p>{row.original.name}</p>
                  </Grid.Column>

                  <Grid.Column textAlign="center">
                    <Header as="h4">Capital</Header>
                    <p>{row.original.capital}</p>
                  </Grid.Column>

                  <Grid.Column textAlign="center">
                    <Header as="h4">A2 code</Header>
                    <p>{row.original.alpha2Code}</p>
                  </Grid.Column>

                  <Grid.Column textAlign="center">
                    <Header as="h4">Region</Header>
                    <p>{row.original.region}</p>
                  </Grid.Column>

                  <Grid.Column textAlign="center">
                    <Header as="h4">Population</Header>
                    <p>{row.original.population}</p>
                  </Grid.Column>
                </Grid>
              </Popup>
            );
          }}
        />
      </div>
    );
  }
}
