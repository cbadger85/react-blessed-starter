import React from 'react';
import InnerBox from './components/InnerBox';
import ProgressBar from './components/ProgressBar';

const App = () => (
  <box
    label="react-blessed demo"
    border={{ type: 'line' }}
    style={{ border: { fg: 'cyan' } }}
  >
    <InnerBox position="left" />
    <InnerBox position="right" />
    <ProgressBar />
    Random text here...
  </box>
);

export default App;
