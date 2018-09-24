import backgrounds from 'backgrounds';
import keymirror from 'keymirror';

export const actionTypes = keymirror({
  SET_BACKGROUND_IMAGE: null,
  SET_FONT: null,
  SET_SHOW_SETTINGS: null,
  SET_QR_INPUT: null,
  SET_QR_INPUT_TYPE: null,
});

export const setRandomBackgroundImage = () => {
  const backgroundImage =
    backgrounds[Math.floor(Math.random() * backgrounds.length)].value;
  return setBackgroundImage(backgroundImage);
};

export const setBackgroundImage = backgroundImage => ({
  type: actionTypes.SET_BACKGROUND_IMAGE,
  payload: {backgroundImage},
});

export const setFont = font => ({
  type: actionTypes.SET_FONT,
  payload: {font},
});

export const setQRInput = (inputType, inputData, inputString) => ({
  type: actionTypes.SET_QR_INPUT,
  payload: {inputData, inputType, inputString},
});

export const setQRInputType = inputType => ({
  type: actionTypes.SET_QR_INPUT_TYPE,
  payload: {inputType},
});

export const setShowSettings = showSettings => ({
  type: actionTypes.SET_SHOW_SETTINGS,
  payload: {showSettings},
});
