import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { bindActionCreators } from 'redux';

import DetailsScreen from '../components/DetailsScreen';
import * as Actions from '../actions/index';




const mapStateToProps = (state, props) => {
  return {
    detailedItem: state.searchReducer.detailedItem
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(DetailsScreen));