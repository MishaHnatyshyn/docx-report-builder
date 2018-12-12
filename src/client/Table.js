import React, { Component } from 'react';

export default class Table extends Component {

  openReportBuilder = (row) => {
    this.props.reportBuilder(row);
  };

  render() {
    const { rows, header } = this.props;
    return (
      <div>
        <table className="all-data">
          {rows.length > 0 ? (
            <thead>
            <tr>
              <th>№</th>
              <th>Культура</th>
              <th>Сорт</th>
              <th>Рік врожаю</th>
              <th>Походження</th>
              <th>№ партії, контрольної одиниці</th>
              <th>Маса партії,  кг</th>
              <th>Кількість місць, шт.</th>
              <th>Відомості про протруєння</th>
              <th>Енергія</th>
              <th>Схожість</th>
              <th>Створити протокол</th>
            </tr>
            </thead>
          ) : null}
          <tbody>
          {rows.map((row, index) => (
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
              <td><button onClick={this.openReportBuilder.bind(this, row)}>Build report</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}