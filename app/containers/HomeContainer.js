import {connect} from 'react-redux';
import { HomeScreen } from '../components/HomeScreen';


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