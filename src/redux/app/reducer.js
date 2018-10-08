import {actionTypes} from './actions';
import bgGraffiti from 'assets/backgrounds/graffiti.jpg';
import {createReducers} from 'redux/utils';

const getInitialState = () => ({
  backgroundColors: ['rgba(210, 230, 150, 1)', 'rgba(189, 165, 197, 1)'],
  backgroundImage: `url(${bgGraffiti})`,
  isPreview: true,
  selectedTab: 'input',
  showSettings: false,
});

export default createReducers(getInitialState(), {
  [actionTypes.SET_BACKGROUND_COLORS]: (state, {payload}) => ({
    ...state,
    backgroundColors: payload,
    backgroundImage: `linear-gradient(90deg, ${payload[0]}, ${payload[1]})`,
  }),
  [actionTypes.SET_BACKGROUND_IMAGE]: (state, {payload}) => ({
    ...state,
    backgroundImage: payload,
    showSettings: false,
  }),
  [actionTypes.SET_PREVIEW]: (state, {payload}) => ({
    ...state,
    isPreview: payload,
  }),
  [actionTypes.SET_SELECTED_TAB]: (state, {payload}) => ({
    ...state,
    selectedTab: payload,
    showSettings: true,
  }),
  [actionTypes.SET_SHOW_SETTINGS]: (state, {payload}) => ({
    ...state,
    showSettings: payload,
  }),
});
