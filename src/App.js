import React from 'react';
import './App.css';
import { Calendar } from './ui/Calendar';
import { ListOfEvents } from './ui/ListOfEvents';

function App() {
  const dates = ['1.04.2021', '2.04.2021', '3.04.2021', '4.04.2021', '5.04.2021', '6.04.2021', '7.04.2021', '8.04.2021', '9.04.2021', '10.04.2021', '11.04.2021', '12.04.2021', '13.04.2021', '14.04.2021', '15.04.2021', '16.04.2021', '17.04.2021', '18.04.2021', '19.04.2021', '20.04.2021', '21.04.2021', '22.04.2021', '23.04.2021', '24.04.2021', '25.04.2021', '26.04.2021', '27.04.2021', '28.04.2021', '29.04.2021', '30.04.2021', '31.04.2021'];
  return (
    <div className='App'>
      <div className='containerApp'>
        <Calendar dates={dates} />
        <ListOfEvents />
      </div>
    </div>
  );
}

export default App;
