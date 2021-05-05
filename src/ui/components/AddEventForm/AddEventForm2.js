import React, { useState } from 'react';
import { FormGroup, TextField, Button, Select, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addEvent } from '../../../bll/reducer';
import { v1 } from 'uuid';

export const AddEventForm2 = React.memo(props => {
  const { date } = props;
  const [eventType, setEventType] = useState('holidays');
  const [eventName, setEventName] = useState('');
  const [where, setWhere] = useState('');
  const [inWhatTime, setInWhatTime] = useState('');
  const [budget, setBudget] = useState('');
  const [note, setNote] = useState('');
  const onChangeEventType = e => {
    setEventType(e.target.value);
  };
  const onChangeEventName = e => {
    setEventName(e.target.value);
  };
  const onChangeWhere = e => {
    setWhere(e.target.value);
  };
  const onChangeInWhatTime = e => {
    setInWhatTime(e.target.value);
  };
  const onChangeBudget = e => {
    setBudget(e.target.value);
  };
  const onChangeNote = e => {
    setNote(e.target.value);
  };
  const dispatch = useDispatch();
  const onClickAdd = event => {
    if (event === 'holidays') {
      dispatch(
        addEvent({
          date: date,
          id: v1(),
          eventType: eventType,
          eventName: eventName,
          where: where,
          inWhatTime: inWhatTime,
        })
      );
    } else if (event === 'events') {
      dispatch(
        addEvent({
          date: date,
          eventType: eventType,
          eventName: eventName,
          budget: budget,
        })
      );
    } else if (event === 'notes') {
      dispatch(
        addEvent({
          date: date,
          eventType: eventType,
          eventName: eventName,
          note: note,
        })
      );
    }
  };

  return (
    <div>
      {eventType === 'holidays' && (
        <form
          onSubmit={() => {
            onClickAdd('holidays');
          }}
        >
          <FormGroup>
            <TextField name='eventName' placeholder='Название события' onChange={onChangeEventName} value={eventName} />
            <Select name='eventType' value={eventType} onChange={onChangeEventType}>
              <MenuItem value={'holidays'}>Приздник</MenuItem>
              <MenuItem value={'notes'}>Заметка</MenuItem>
              <MenuItem value={'events'}>Событие</MenuItem>
            </Select>
            <TextField name='where' placeholder='Куда идти?' onChange={onChangeWhere} value={where} />
            <TextField name='inWhatTime' placeholder='Во сколько?' onChange={onChangeInWhatTime} value={inWhatTime} />
          </FormGroup>
          <Button style={{ fontFamily: 'Caveat' }} variant='contained' color='primary' type='submit'>
            Добавить
          </Button>
        </form>
      )}
      {eventType === 'notes' && (
        <form
          onSubmit={() => {
            onClickAdd('notes');
          }}
        >
          <FormGroup>
            <TextField name='eventName' placeholder='Название события' onChange={onChangeEventName} value={eventName} />
            <Select name='eventType' value={eventType} onChange={onChangeEventType}>
              <MenuItem value={'notes'}>заметка</MenuItem>
              <MenuItem value={'events'}>событие</MenuItem>
              <MenuItem value={'holidays'}>приздник</MenuItem>
            </Select>
            <TextField name='notes' placeholder='Заметка' onChange={onChangeNote} value={note} />
          </FormGroup>
          <Button style={{ fontFamily: 'Caveat' }} variant='contained' color='primary' type='submit'>
            Добавить
          </Button>
        </form>
      )}
      {eventType === 'events' && (
        <form
          onSubmit={() => {
            onClickAdd('events');
          }}
        >
          <FormGroup>
            <TextField name='eventName' placeholder='Название события' onChange={onChangeEventName} value={eventName} />
            <Select name='eventType' value={eventType} onChange={onChangeEventType}>
              <MenuItem value={'events'}>событие</MenuItem>
              <MenuItem value={'holidays'}>приздник</MenuItem>
              <MenuItem value={'notes'}>заметка</MenuItem>
            </Select>
            <TextField name='events' placeholder='Бюджет' onChange={onChangeBudget} value={budget} />
          </FormGroup>
          <Button style={{ fontFamily: 'Caveat' }} variant='contained' color='primary' type='submit'>
            Добавить
          </Button>
        </form>
      )}
    </div>
  );
});
