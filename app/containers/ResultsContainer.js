import { connect } from 'react-redux';
import {withNavigation} from 'react-navigation';
import {bindActionCreators} from 'redux';

import ResultsScreen from '../components/ResultsScreen';
import * as Actions from '../actions/index';




const mapStateToProps = (state, props) => {
  return {
    loading: state.searchReducer.loading,
    searchResults: state.searchReducer.searchResults,
    searchTerm: state.searchReducer.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ResultsScreen));