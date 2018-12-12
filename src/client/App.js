import React, { Component } from 'react';
import DownloadXLSX from "./DownloadXLSX";
import Table from "./Table";
import ReportBuilder from "./ReportBuilder";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      header: {},
      rows: [],
      currentRow: []
    }
  }

  reportBuilder = (row) => {
    this.setState({ currentRow:row })
  }

  fileUploaded = (data) => {
    this.setState(data)
  }

  reset = () => {
    this.setState({ currentRow: [] })
  }

  render() {
    const {  header, rows, currentRow } = this.state;
    return (
      <div>
        <DownloadXLSX fileUploaded={this.fileUploaded}/>
        {currentRow.length === 0
          ? <Table header={header} rows={rows} reportBuilder={this.reportBuilder}/>
          : <ReportBuilder header={header} row={currentRow} reset={this.reset}/>}

      </div>
    );
  }
}