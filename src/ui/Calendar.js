import React, { useState } from 'react';
import './Calendar.css';
import { Button, Paper } from '@material-ui/core/';
import { Modal } from '../ui/components/Modal/Modal';
import { AddEventForm } from './components/AddEventForm/AddEventForm';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDate } from '../bll/reducer';

export const Calendar = props => {
  const { dates } = props;
  const [activeModal, setActiveModal] = useState(false);
  const [dayChosen, setDayChosen] = useState(false);
  const dispatch = useDispatch();
  const currentDate = useSelector(state => state.app.currentDate);

  return (
    <div className='calendar'>
      <Paper elevation={3}>
        <div className='calendar__week grid-container grid-container--fill'>
          <div className='calendar__day grid-element borderInvisible'>Пн</div>
          <div className='calendar__day grid-element borderInvisible'>Вт</div>
          <div className='calendar__day grid-element borderInvisible'>Ср</div>
          <div className='calendar__day grid-element borderInvisible'>Чт</div>
          <div className='calendar__day grid-element borderInvisible'>Пт</div>
          <div className='calendar__day grid-element borderInvisible'>Сб</div>
          <div className='calendar__day grid-element borderInvisible'>Вс</div>
        </div>

        <div className='calendar__numbers grid-container grid-container--fill'>
          <div className='calendar__number grid-element borderInvisible'></div>
          <div className='calendar__number grid-element borderInvisible'></div>
          <div className='calendar__number grid-element borderInvisible'></div>
          {dates.map((date, i) => {
            return (
              <div
                className={currentDate === date ? 'calendar__number grid-element active' : 'calendar__number grid-element'}
                onClick={() => {
                  setDayChosen(true);
                  dispatch(setCurrentDate(date));
                }}
              >
                {date.split('.')[0]}
              </div>
            );
          })}
        </div>
      </Paper>
      {dayChosen && (
        <Button
          variant='contained'
          color='secondary'
          onClick={() => {
            setActiveModal(true);
          }}
        >
          Добавить
        </Button>
      )}

      <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
        <AddEventForm />
      </Modal>
    </div>
  );
};
