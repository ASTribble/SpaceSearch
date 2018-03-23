import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withNavigation } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import * as Actions from '../actions/index';

const mapStateToProps = (state, props) => {
    return {
      loading: state.searchReducer.loading,
      searchTerm: state.searchReducer.searchTerm
    }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HomeScreen));