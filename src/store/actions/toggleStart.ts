import * as actionTypes from '../actionTypes';

export const toggleStart = (clicked: boolean) => ({
  type: actionTypes.CLICK_START,
  payload: { clicked },
});

export const addWindow = (windowsOpen: string[]) => ({
  type: actionTypes.ADD_WINDOW,
  payload: { windowsOpen },
});
