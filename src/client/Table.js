import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    const { rows, header } = this.props;
    return (
      <div>
        <table>
          <tbody>
          {rows.map((row, index) => {
            return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.$culture_type}</td>
              <td>{row.$culture_name}</td>
              <td>{row.$year}</td>
              <td>{row.$country}</td>
              <td>{row.$partition_num}</td>
              <td>{row.$partition_weight}</td>
              <td>{row.$places_num}</td>
              <td>{row.$treated}</td>
              <td>{row.$energy}</td>
              <td>{row.$simularity}</td>
            </tr>
          )})}
          </tbody>
        </table>
      </div>
    );
  }
}