const ADD_EVENT = 'ADD_EVENT';
const SET_CURRENT_DATE = 'SET_CURRENT_DATE';

const initialState = {
  holidays: [],
  notes: [],
  events: [],
  currentDate: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_DATE:
      return { ...state, currentDate: action.currentDate };
    case ADD_EVENT: {
      if (action.event.eventType === 'holidays') {
        return { ...state, holidays: [...state.holidays, action.event] };
      } else if (action.event.eventType === 'notes') {
        return { ...state, notes: [...state.notes, action.event] };
      } else if (action.event.eventType === 'events') {
        return { ...state, events: [...state.events, action.event] };
      }
    }
    default:
      return state;
  }
};

export const setCurrentDate = currentDate => ({ type: SET_CURRENT_DATE, currentDate });
export const addEvent = event => ({
  type: ADD_EVENT,
  event,
});
