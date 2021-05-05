import React, { useState } from 'react';
import { FormGroup, TextField, Button, Select, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { addEvent } from '../../../bll/reducer';

export const AddEventForm = React.memo(props => {
  const { date } = props;
  const [eventType, setEventType] = useState('');
  const handleChange = e => {
    setEventType(e.target.value);
  };
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      eventName: '',
      where: '',
      inWhatTime: '',
    },
    validate: values => {
      const errors = {};
      if (!values.eventName) {
        errors.eventName = 'Required';
      }
      if (!values.where) {
        errors.where = 'Required';
      }
      if (!values.inWhatTime) {
        errors.inWhatTime = 'Required';
      }
      return errors;
    },
    onSubmit: values => {
      dispatch(
        addEvent({
          date: date,
          eventType: eventType,
          eventName: values.eventName,
          where: values.where,
          inWhatTime: values.inWhatTime,
        })
      );
      formik.resetForm();
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <TextField name='eventName' placeholder='Название события' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.eventName} />
          {formik.touched.eventName && formik.errors.eventName ? <div style={{ color: 'red' }}> {formik.errors.eventName} </div> : null}

          <Select name='eventType' value={eventType} onChange={handleChange}>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'holidays'}>приздник</MenuItem>
            <MenuItem value={'notes'}>заметка</MenuItem>
            <MenuItem value={'events'}>событие</MenuItem>
          </Select>

          <TextField name='where' placeholder='Куда идти?' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.where} />
          {formik.touched.where && formik.errors.where ? <div style={{ color: 'red' }}> {formik.errors.where} </div> : null}

          <TextField name='inWhatTime' placeholder='Во сколько?' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.inWhatTime} />
          {formik.touched.inWhatTime && formik.errors.inWhatTime ? <div style={{ color: 'red' }}> {formik.errors.inWhatTime} </div> : null}
        </FormGroup>
        <Button type='submit'>Добавить</Button>
      </form>
    </div>
  );
});
