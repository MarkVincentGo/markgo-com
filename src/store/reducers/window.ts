import * as actionTypes from '../actionTypes';

export interface IWindowsState {
  windowsOpen: string[];
}

interface StartButtonClickAction {
  type: string;
  payload: IWindowsState;
}

const initialState: IWindowsState = {
  windowsOpen: [],
};

export default (state: IWindowsState = initialState, action: StartButtonClickAction) => {
  switch (action.type) {
    case actionTypes.ADD_WINDOW:
      return {
        ...state,
        windowsOpen: action.payload.windowsOpen,
      };
    default:
      return state;
  }
};
