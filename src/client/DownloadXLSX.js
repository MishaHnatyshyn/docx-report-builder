import React, { Component } from 'react';

export default class DownloadXLSX extends Component {

  state = {
    file: null
  };

  uploadClick = () => {
    if (!this.state.file) return;
    const { fileUploaded } = this.props;
    const data = new FormData();
    data.append('file', this.state.file);

    const options = {
      method: 'POST',
      body: data
    }

    fetch('/api/xlsx/upload', options)
      .then(res => res.json())
      .then(res => {
        fileUploaded(res)
      })
  };

  fileUpload = (e) => {
    this.setState({ file: e.target.files[0] })
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.fileUpload}/>
        <input type="button" value="Upload" onClick={this.uploadClick}/>
      </div>
    );
  }
}