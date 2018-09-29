import backgrounds from 'backgrounds';
import keymirror from 'keymirror';

export const actionTypes = keymirror({
  SET_PLAY_MUSIC: null,
  SET_BACKGROUND_COLORS: null,
  SET_BACKGROUND_IMAGE: null,
  SET_SHOW_SETTINGS: null,
  SET_QR_INPUT: null,
  SET_QR_INPUT_TYPE: null,
  SET_QR_EYE_COLORS: null,
  SET_QR_EYE_PATTERN: null,
  SET_QR_PIXEL_COLORS: null,
  SET_QR_PIXEL_PATTERN: null,
});

export const setPlayMusic = playMusic => ({
  type: actionTypes.SET_PLAY_MUSIC,
  payload: {playMusic},
});

export const setRandomBackgroundImage = () => {
  const backgroundImage =
    backgrounds[Math.floor(Math.random() * backgrounds.length)].value;
  return setBackgroundImage(backgroundImage);
};

export const setBackgroundColors = backgroundColors => ({
  type: actionTypes.SET_BACKGROUND_COLORS,
  payload: {backgroundColors},
});

export const setBackgroundImage = backgroundImage => ({
  type: actionTypes.SET_BACKGROUND_IMAGE,
  payload: {backgroundImage},
});

export const setQRInput = (inputType, inputData, inputString) => ({
  type: actionTypes.SET_QR_INPUT,
  payload: {inputData, inputType, inputString},
});

export const setQRInputType = inputType => ({
  type: actionTypes.SET_QR_INPUT_TYPE,
  payload: {inputType},
});

export const setQREyeColors = eyeColors => ({
  type: actionTypes.SET_QR_EYE_COLORS,
  payload: {eyeColors},
});

export const setQREyePattern = eyePattern => ({
  type: actionTypes.SET_QR_EYE_PATTERN,
  payload: {eyePattern},
});

export const setQRPixelColors = pixelColors => ({
  type: actionTypes.SET_QR_PIXEL_COLORS,
  payload: {pixelColors},
});

export const setQRPixelPattern = pixelPattern => ({
  type: actionTypes.SET_QR_PIXEL_PATTERN,
  payload: {pixelPattern},
});

export const setShowSettings = showSettings => ({
  type: actionTypes.SET_SHOW_SETTINGS,
  payload: {showSettings},
});
