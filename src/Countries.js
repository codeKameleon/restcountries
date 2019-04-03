import React, { Component } from 'react';
import ReactTable from 'react-table';
import './Countries.css';
import 'react-table/react-table.css';

export default class Countries extends Component {
  state = {
    countries: []
  };

  async componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ countries: data });
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
        Header: 'Alpha2Code',
        accessor: 'alpha2Code'
      }
    ];

    return (
      <div>
        <h1>Countries</h1>

        <ReactTable
          className="-striped -highlight"
          data={countries}
          columns={columns}
          getTdProps={(state, rowInfo) => {
            return {
              onClick: () => {
                /*TO DO : Add Popup with info below on click event*/
                console.log(rowInfo.original.name);
                console.log(rowInfo.original.capital);
                console.log(rowInfo.original.alpha2Code);
                console.log(rowInfo.original.region);
                console.log(rowInfo.original.population);
              }
            };
          }}
        />
      </div>
    );
  }
}
