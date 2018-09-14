import { connect } from 'react-redux';
import App from '../components/App';
import {
  addNewRecord, toggleCapturingIndicator, clearRecords, updateRecordState
} from '../actions/record';

const mapStateToProps = (state) => {
  return {
    records: state.records.records
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewRecord: (item) => {
      dispatch(addNewRecord(item));
    },
    toggleCapturingIndicator: (item) => {
      dispatch(toggleCapturingIndicator(item));
    },
    clearRecords: () => {
      dispatch(clearRecords());
    },
    updateRecordState: (item) => {
      dispatch(updateRecordState(item));
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
