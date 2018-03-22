import { StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import {configuretore} from './store';

import {App} from './App';

export default class Root extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
    }
  }

  render() {
    if (this.state.isLoading) {
      return null
    }
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    )
  }
}