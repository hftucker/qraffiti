import {actionTypes} from './actions';
import bgGraffiti from 'assets/backgrounds/graffiti.jpg';
import {createReducers} from 'redux/utils';

const getInitialState = () => ({
  backgroundColors: ['rgba(210, 230, 150, 1)', 'rgba(189, 165, 197, 1)'],
  backgroundImage: `url(${bgGraffiti})`,
  isPreview: true,
  selectedTab: null,
});

export default createReducers(getInitialState(), {
  [actionTypes.SET_BACKGROUND_COLORS]: (
    state,
    {payload: backgroundColors},
  ) => ({
    ...state,
    backgroundColors,
    backgroundImage: `linear-gradient(90deg, ${backgroundColors[0]}, ${
      backgroundColors[1]
    })`,
  }),
  [actionTypes.SET_BACKGROUND_IMAGE]: (state, {payload: backgroundImage}) => ({
    ...state,
    backgroundImage,
  }),
  [actionTypes.SET_PREVIEW]: (state, {payload: isPreview}) => ({
    ...state,
    isPreview,
  }),
  [actionTypes.SET_SELECTED_TAB]: (state, {payload: selectedTab}) => ({
    ...state,
    selectedTab: state.selectedTab === selectedTab ? null : selectedTab,
  }),
});
