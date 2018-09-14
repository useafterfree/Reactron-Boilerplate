export const RECORD_ADDED = 'RECORD_ADDED';
export const TOGGLE_CAPTURING_INDICATOR = 'TOGGLE_CAPTURING_INDICATOR';
export const RECORDS_CLEARED = 'RECORDS_CLEARED';
export const RECORD_STATE_UPDATED = 'RECORD_STATE_UPDATED';

export const addNewRecord = (newItem) => {
  return {
    type: RECORD_ADDED,
    newItem
  };
};

export const toggleCapturingIndicator = (newState) => {
  return {
    type: TOGGLE_CAPTURING_INDICATOR,
    newState
  };
};

export const clearRecords = () => {
  return {
    type: RECORDS_CLEARED
  };
};

export const updateRecordState = (newRecordState) => {
  return {
    type: RECORD_STATE_UPDATED,
    newRecordState // {timestamp: 123, highResState: 'HIGH_RES_IN_PROGRESS'}
  };
};
