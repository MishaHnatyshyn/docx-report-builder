import React, { Component } from 'react';
import DownloadXLSX from "./DownloadXLSX";
import Table from "./Table";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      header: {},
      rows: []
    }
  }

  fileUploaded = (data) => {
    this.setState(data)
  }

  render() {
    return (
      <div>
        <DownloadXLSX fileUploaded={this.fileUploaded}/>
        <Table {...this.state}/>
      </div>
    );
  }
}