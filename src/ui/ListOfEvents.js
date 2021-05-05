import React, { useState } from 'react';
import './ListOfEvents.css';
import { useDispatch, useSelector } from 'react-redux';
import { Paper } from '@material-ui/core/';
import { deleteEvent } from '../bll/reducer';
import { Modal } from '../ui/components/Modal/Modal';
import { UpdateEventForm } from '../ui/components/UpdateEventForm/UpdateEventForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

export const ListOfEvents = props => {
  const { date } = props;
  const [activeUpdateModal, setActiveUpdateModal] = useState(false);
  const [activeEventId, setActiveEventId] = useState('');
  const holidays = useSelector(state => state.app.holidays);
  const notes = useSelector(state => state.app.notes);
  const events = useSelector(state => state.app.events);
  const currentDateAsString = date.toISOString();
  const dispatch = useDispatch();
  return (
    <div>
      <Paper elevation={3}>
        <div className='list'>
          <div className='holidays'>
            {holidays

              .filter(holiday => holiday.date === currentDateAsString)
              .map(holiday => {
                return (
                  <div>
                    <div className='event'>
                      <h3 style={{ color: '#3f51b5' }}> {holiday.eventName}</h3>
                      <div className='eventButtons'>
                        <FontAwesomeIcon
                          onClick={() => {
                            dispatch(deleteEvent(holiday.id, 'holidays'));
                          }}
                          icon={faTrash}
                          size='2x'
                          style={{ marginRight: '10px', color: '#3f51b5' }}
                        />
                        <FontAwesomeIcon
                          onClick={() => {
                            setActiveUpdateModal(true);
                            setActiveEventId(holiday.id);
                          }}
                          icon={faPencilAlt}
                          size='2x'
                          style={{ color: '#3f51b5' }}
                        />
                      </div>
                    </div>
                    <div> Время: {holiday.inWhatTime}</div>
                    <div> Место: {holiday.where}</div>
                  </div>
                );
              })}
          </div>

          <div className='events'>
            {events
              .filter(event => event.date === currentDateAsString)
              .map(event => {
                return (
                  <div>
                    <div className='event'>
                      <h3 style={{ color: '#3f51b5' }}> {event.eventName}</h3>
                      <div className='eventButtons'>
                        <FontAwesomeIcon
                          onClick={() => {
                            dispatch(deleteEvent(event.id, 'events'));
                          }}
                          icon={faTrash}
                          size='2x'
                          style={{ marginRight: '10px', color: '#3f51b5' }}
                        />
                        <FontAwesomeIcon
                          onClick={() => {
                            setActiveUpdateModal(true);
                            setActiveEventId(event.id);
                          }}
                          icon={faPencilAlt}
                          size='2x'
                          style={{ color: '#3f51b5' }}
                        />
                      </div>
                    </div>
                    <div> Бюджет: {event.budget}</div>
                  </div>
                );
              })}
          </div>
          <div className='notes'>
            {notes
              .filter(note => note.date === currentDateAsString)
              .map(note => {
                return (
                  <div>
                    <div className='event'>
                      <h3 style={{ color: '#3f51b5' }}> {note.eventName}</h3>
                      <div className='eventButtons'>
                        <FontAwesomeIcon
                          onClick={() => {
                            dispatch(deleteEvent(note.id, 'notes'));
                          }}
                          icon={faTrash}
                          size='2x'
                          style={{ marginRight: '10px', color: '#3f51b5' }}
                        />
                        <FontAwesomeIcon
                          onClick={() => {
                            setActiveUpdateModal(true);
                            setActiveEventId(note.id);
                          }}
                          icon={faPencilAlt}
                          size='2x'
                          style={{ color: '#3f51b5' }}
                        />
                      </div>
                    </div>
                    <div> Заметка: {note.note}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </Paper>
      <Modal activeModal={activeUpdateModal} setActiveModal={setActiveUpdateModal}>
        <UpdateEventForm date={date} activeEventId={activeEventId} />
      </Modal>
    </div>
  );
};
