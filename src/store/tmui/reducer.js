import { handleActions } from 'redux-actions';
import { setTmuiProp } from './actions';

// TODO: UPDATE PLACEHOLDER
const initialState = {
  isPrimaryDrawerOpen: false,
  isSpeedDialogOpen: false,
  activeTabIndex: 0,
  currentRole: {
    label: 'CBP Admin',
    value: 'cbp_admin',
  },
};

export default handleActions(
  {
    [setTmuiProp]: (state, { payload }) => ({ ...state, ...payload }),
  },
  initialState
);
