const ADD_EVENT = 'ADD_EVENT';
const DELETE_EVENT = 'DELETE_EVENT';
const UPDATE_EVENT = 'UPDATE_EVENT';

const initialState = {
  holidays: [],
  notes: [],
  events: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT: {
      if (action.event.eventType === 'holidays') {
        return { ...state, holidays: [...state.holidays, action.event] };
      } else if (action.event.eventType === 'notes') {
        return { ...state, notes: [...state.notes, action.event] };
      } else if (action.event.eventType === 'events') {
        return { ...state, events: [...state.events, action.event] };
      }
      break;
    }

    case DELETE_EVENT: {
      if (action.eventType === 'holidays') {
        return { ...state, holidays: [...state.holidays.filter(holiday => holiday.id !== action.eventId)] };
      } else if (action.eventType === 'notes') {
        return { ...state, notes: [...state.notes.filter(note => note.id !== action.eventId)] };
      } else if (action.eventType === 'events') {
        return { ...state, events: [...state.events.filter(event => event.id !== action.eventId)] };
      }
      break;
    }

    case UPDATE_EVENT: {
      if (action.eventType === 'holidays') {
        return { ...state, holidays: [...state.holidays.map(holiday => (holiday.id === action.eventId ? (holiday = action.updateEvent) : holiday))] };
      } else if (action.eventType === 'notes') {
        return { ...state, notes: [...state.notes.map(note => (note.id === action.eventId ? (note = action.updateEvent) : note))] };
      } else if (action.eventType === 'events') {
        return { ...state, events: [...state.events.map(event => (event.id === action.eventId ? (event = action.updateEvent) : event))] };
      }
      break;
    }
    default:
      return state;
  }
};

export const addEvent = event => ({
  type: ADD_EVENT,
  event,
});
export const deleteEvent = (eventId, eventType) => ({
  type: DELETE_EVENT,
  eventId,
  eventType,
});
export const updateEvent = (eventId, eventType, updateEvent) => ({
  type: UPDATE_EVENT,
  eventId,
  eventType,
  updateEvent,
});
