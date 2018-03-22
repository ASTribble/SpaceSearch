import { connect } from 'react-redux';

import { ResultsScreen } from '../components/ResultsScreen';
import * as Actions from '../actions/index';




const mapStateToProps = (state, props) => {
  return {
    loading: state.searchReducer.loading,
    searchResults: state.searchReducer.searchResults
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ResultsScreen));