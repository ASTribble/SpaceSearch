import { StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import store from './store';

import {App} from './App';

export default class Root extends Component {

  render() {
    if (this.state.isLoading) {
      return null
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}