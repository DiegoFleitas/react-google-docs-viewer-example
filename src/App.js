import React, { Component } from 'react';
import './App.css';

import GoogleDocsViewer from 'react-google-docs-viewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Example of react-google-docs-viewer</h1>
        </header>
        
        <GoogleDocsViewer
          width="600px"
          height="780px"
          fileUrl="https://docs.google.com/document/d/1XN2m7upUDxLRgr6OY6R1feB0Kfer5DrB6FnEtV5oxxI/export?format=pdf"
        />
      </div>
    );
  }
}

export default App;
