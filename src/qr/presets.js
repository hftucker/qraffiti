import {createPreset} from 'qr/utils';
import {getInitialState} from 'redux/qr/reducer';

const initialQRState = getInitialState();

export default {
  classic: createPreset({
    id: 'classic',
    backgroundColors: ['#FFFFFF', '#FFFFFF'],
    bodyColors: ['#000000', '#000000'],
    bodyPattern: 'base',
    eyeColors: ['#000000', '#000000'],
    eyePattern: 'base',
    logo: null,
  }),
  inverse: createPreset({
    id: 'inverse',
    backgroundColors: ['#000000', '#000000'],
    bodyColors: ['#FFFFFF', '#FFFFFF'],
    bodyPattern: 'base',
    eyeColors: ['#FFFFFF', '#FFFFFF'],
    eyePattern: 'base',
    logo: null,
  }),
  qraffiti: createPreset({
    id: 'qraffiti',
    backgroundColors: initialQRState.backgroundColors,
    bodyColors: initialQRState.bodyColors,
    bodyPattern: initialQRState.bodyPattern,
    eyeColors: initialQRState.eyeColors,
    eyePattern: initialQRState.eyePattern,
    logo: initialQRState.logo,
  }),
  love: createPreset({
    id: 'love',
    backgroundColors: ['#FFFFFF', '#FFCCE2'],
    bodyColors: ['#FF0000', '#FF0000'],
    bodyPattern: 'heart',
    eyeColors: ['#FF0000', '#D9317A'],
    eyePattern: 'base',
    logo: 'heart',
  }),
  facebook: createPreset({
    id: 'facebook',
    backgroundColors: ['#FFFFFF', '#FFFFFF'],
    bodyColors: ['#4267B2', '#4267B2'],
    bodyPattern: 'round',
    eyeColors: ['#4267B2', '#4267B2'],
    eyePattern: 'base',
    logo: 'facebook',
  }),
  instagram: createPreset({
    id: 'instagram',
    backgroundColors: ['#FFFFFF', '#FFFFFF'],
    bodyColors: ['#FEC564', '#D9317A'],
    bodyPattern: 'round',
    eyeColors: ['#5258CF', '#893DC2'],
    eyePattern: 'base',
    logo: 'instagram',
  }),
  twitter: createPreset({
    id: 'twitter',
    backgroundColors: ['#FFFFFF', '#FFFFFF'],
    bodyColors: ['#1DA1F1', '#1DA1F1'],
    bodyPattern: 'triangle',
    eyeColors: ['#1DA1F1', '#1DA1F1'],
    eyePattern: 'base',
    logo: 'twitter',
  }),
  youtube: createPreset({
    id: 'youtube',
    backgroundColors: ['#FFFFFF', '#FFFFFF'],
    bodyColors: ['#FF0000', '#FF0000'],
    bodyPattern: 'triangle',
    eyeColors: ['#FF0000', '#FF0000'],
    eyePattern: 'base',
    logo: 'youtube',
  }),
  discord: createPreset({
    id: 'discord',
    backgroundColors: ['#FFFFFF', '#FFFFFF'],
    bodyColors: ['#7289DA', '#7289DA'],
    bodyPattern: 'round',
    eyeColors: ['#7289DA', '#7289DA'],
    eyePattern: 'base',
    logo: 'discord',
  }),
  linkedin: createPreset({
    id: 'linkedin',
    backgroundColors: ['#FFFFFF', '#FFFFFF'],
    bodyColors: ['#0277B5', '#273F4A'],
    bodyPattern: 'base',
    eyeColors: ['#0277B5', '#273F4A'],
    eyePattern: 'base',
    logo: 'linkedin',
  }),
  email: createPreset({
    id: 'email',
    backgroundColors: ['#F1F1F1', '#F1F1F1'],
    bodyColors: ['#DB483C', '#DB483C'],
    bodyPattern: 'round',
    eyeColors: ['#DB483C', '#DB483C'],
    eyePattern: 'base',
    logo: 'gmail',
  }),
  wifi: createPreset({
    id: 'wifi',
    backgroundColors: ['#FFFFFF', '#FFFFFF'],
    bodyColors: ['#0187AA', '#0187AA'],
    bodyPattern: 'dot',
    eyeColors: ['#0187AA', '#0187AA'],
    eyePattern: 'base',
    logo: 'wifi',
  }),
  phone: createPreset({
    id: 'phone',
    backgroundColors: ['#FFFFFF', '#FFFFFF'],
    bodyColors: ['#7B519D', '#7B519D'],
    bodyPattern: 'dot',
    eyeColors: ['#7B519D', '#7B519D'],
    eyePattern: 'base',
    logo: 'phone',
  }),
};
