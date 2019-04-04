import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Header, Button, Popup, Grid } from 'semantic-ui-react';
import './EuropeanCountries.css';
import 'react-table/react-table.css';
import 'semantic-ui-css/semantic.min.css';

export default class EuropeanCountries extends Component {
  state = {
    countries: []
  };

  async componentDidMount() {
    try {
      const url = 'https://restcountries.eu/rest/v2/regionalbloc/eu';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ countries: data });
    } catch (error) {
      throw Error(error);
    }
  }

  render() {
    const countries = this.state.countries;
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
        <h1>European Countries</h1>

        <ReactTable
          className="-striped -highlight"
          data={countries}
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
