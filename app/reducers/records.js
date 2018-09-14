import {
  RECORD_ADDED, TOGGLE_CAPTURING_INDICATOR, RECORDS_CLEARED, RECORD_STATE_UPDATED
} from '../actions/record';

const MAX_RECORDS = 26;

const initialState = {
  records: []
};

const resolution = (state = initialState, action) => {
  // switch (action.type) {
  //   case RECORD_ADDED:
  //     if (contains(state.records, action.newItem)){
  //       return state;
  //     }
  //     let croppedRecords = crop(state.records);
  //     return {
  //       ...state,
  //       records: [...croppedRecords, action.newItem]
  //     };
  //   case TOGGLE_CAPTURING_INDICATOR:
  //     return {
  //       ...state,
  //       captureON: action.newState
  //     };
  //   case RECORDS_CLEARED:
  //     return {
  //       ...state,
  //       records: []
  //     };
  //   case RECORD_STATE_UPDATED:
  //     return {
  //       ...state,
  //       records: state.records.map((record) => {
  //         if (record.timestamp === action.newRecordState.timestamp) {
  //           return {
  //             ...record,
  //             highResState: action.newRecordState.highResState
  //           };
  //         }
  //         return record;
  //       })
  //     };
  //   default:
  //     return state;
  // }
  return Object.assign(state, { [action.type]: {  ...state, records: initialState.records }  })
};

export default resolution;
