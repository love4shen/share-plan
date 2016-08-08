import React from 'react';
// import logo from '../logo.svg';
import './App.css';
import PlanList from './PlanList';

const App = () => {
  const data = {
    context: {
      timeZone: 'GMT+8',
    },
    events: [{
      summary: 'complete staff 1',
      start: ['0', '00'],
      end: ['12', '00'],
    }, {
      summary: 'complete staff 2',
      start: ['12', '00'],
      end: ['24', '00'],
    }],
  };

  return (
    <div className="App">
      <div>
        <PlanList events={data.events} />
      </div>
    </div>
  );
};

export default App;
