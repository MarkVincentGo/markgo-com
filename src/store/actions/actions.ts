import * as actionTypes from '../actionTypes';

export const toggleStart = (clicked: boolean) => ({
  type: actionTypes.CLICK_START,
  payload: { clicked },
});

export const addWindow = (windowName: string) => ({
  type: actionTypes.ADD_WINDOW,
  payload: { window: windowName },
});

export const closeWindow = (windowId: number) => ({
  type: actionTypes.CLOSE_WINDOW,
  payload: { window: windowId },
});
