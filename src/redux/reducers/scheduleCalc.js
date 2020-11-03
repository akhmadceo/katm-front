import moment from "moment"; 

const initialState = {
    dateFrom: moment(),
    dateTo: moment().add(1, "years"),
    total: 0,
    data: [],
    calculating: false,
  };
  
  const scheduleCalc = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SCHEDULE_DATE_FROM':
        return {
          ...state,
          dateFrom: action.payload,
          calculating: false,
        };
  
      case 'SET_SCHEDULE_DATE_TO':
        return {
          ...state,
          dateTo: action.payload,
          calculating: false,
        };

      case 'SET_SCHEDULE_TOTAL':
        return {
          ...state,
          total: action.payload,
          calculating: false,
        };
        
      case 'SET_SCHEDULE_DATA':
        return {
          ...state,
          data: action.payload,
          calculating: false,
        };

      case 'SET_SCHEDULE_LOADED':
        return {
          ...state,
          data: action.payload,
          calculating: false,
        };
  
      default:
        return state;
    }
  };
  
  export default scheduleCalc;