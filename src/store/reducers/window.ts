import * as actionTypes from '../actionTypes';

export interface IWindow {
  id: number;
  name: string;
  closed: boolean;
  minimized: boolean;
  func?: any
}

export interface IWindowsState {
  currentIdCount: number;
  windowsOpen: IWindow[];
}

interface WindowAction {
  type: string;
  payload: any;
}

const initialState: IWindowsState = {
  currentIdCount: 0,
  windowsOpen: [],
};

export default (state: IWindowsState = initialState, action: WindowAction) => {
  switch (action.type) {
    case actionTypes.ADD_WINDOW: {
      const newWindow = {
        id: state.currentIdCount,
        name: action.payload.window,
        closed: false,
        minimized: false,
      };
      return {
        ...state,
        currentIdCount: state.currentIdCount + 1,
        windowsOpen: [...state.windowsOpen, newWindow],
      };
    }
    case actionTypes.CLOSE_WINDOW:
      return {
        ...state,
        windowsOpen: state.windowsOpen
          .map((window: IWindow) => {
            const newWindow = { ...window };
            if (window.id === action.payload.window) {
              newWindow.closed = true;
            }
            return newWindow;
          }),
      };
    default:
      return state;
  }
};
