import { atom } from 'recoil';

// Define Recoil atom to store input data
export const inputDataState = atom({
  key: 'inputDataState',
  default: localStorage.getItem('inputData') || '',
});