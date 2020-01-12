import { Provider } from 'react-redux';

import addons from '@storybook/addons';
import withRedux from 'addon-redux/withRedux';

import createStore from '../store/create';

const {
  store,
  // persistor,
} = createStore();

const withReduxSettings = {
  Provider,
  store,
  // This is required to prevent page visibility issues with redux persist.
  // state: { tmui: { activeTabIndex: 0 } },
  // actions: [{ name: 'Demo Action', action: { type: 'test' } }],
};

const withReduxDecorator = withRedux(addons)(withReduxSettings);

export default withReduxDecorator;
