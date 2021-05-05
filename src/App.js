import React, { useState } from 'react';
import './App.css';
import { ListOfEvents } from './ui/ListOfEvents';
import Calendar from 'react-calendar';
import { Button, Paper } from '@material-ui/core/';
import { Modal } from './ui/components/Modal/Modal';
import { AddEventForm2 } from './ui/components/AddEventForm/AddEventForm2';

function App() {
  const [date, setDate] = useState(new Date());
  const [dayChosen, setDayChosen] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  return (
    <div className='App'>
      <div className='containerApp'>
        <Paper elevation={3} style={{ textAlign: 'center' }}>
          <Calendar
            onChange={setDate}
            value={date}
            onClickDay={() => {
              setDayChosen(true);
            }}
          />

          {dayChosen && (
            <Button
              style={{ fontFamily: 'Caveat' }}
              variant='contained'
              color='primary'
              onClick={() => {
                setActiveModal(true);
              }}
            >
              Добавить
            </Button>
          )}
        </Paper>
        <ListOfEvents date={date} />
        <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
          <AddEventForm2 date={date} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
