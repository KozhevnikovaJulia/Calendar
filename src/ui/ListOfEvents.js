import React from 'react';
import './ListOfEvents.css';
import { useSelector } from 'react-redux';
import { Paper } from '@material-ui/core/';

export const ListOfEvents = props => {
  const currentDate = useSelector(state => state.app.currentDate);
  const holidays = useSelector(state => state.app.holidays);
  const notes = useSelector(state => state.app.notes);
  const events = useSelector(state => state.app.events);

  return (
    <div>
      <Paper elevation={3}>
        <div className='list'>
          <div className='holidays'>
            <h3>holidays</h3>
            {holidays
              .filter(holiday => holiday.date === currentDate)
              .map(holiday => {
                return (
                  <div>
                    <div> Событие: {holiday.eventName}</div>
                    <div> Время: {holiday.inWhatTime}</div>
                    <div> Место: {holiday.where}</div>
                  </div>
                );
              })}
          </div>
          <div className='events'>
            <h3>events</h3>
            {events
              .filter(event => event.date === currentDate)
              .map(event => {
                return (
                  <div>
                    <div> Событие: {event.eventName}</div>
                    <div> Время: {event.inWhatTime}</div>
                    <div> Место: {event.where}</div>
                  </div>
                );
              })}
          </div>
          <div className='notes'>
            <h3>notes</h3>
            {notes
              .filter(note => note.date === currentDate)
              .map(note => {
                return (
                  <div>
                    <div> Событие: {note.eventName}</div>
                    <div> Время: {note.inWhatTime}</div>
                    <div> Место: {note.where}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </Paper>
    </div>
  );
};
