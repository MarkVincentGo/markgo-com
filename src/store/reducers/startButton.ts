import * as actionTypes from '../actionTypes';

interface IStartButtonClicked {
  clicked: boolean;
}

export type IStartButtonState = {
  clicked: boolean;
}

type StartButtonAction = {
  type: string;
  payload: IStartButtonClicked;
}

const initialState = {
  clicked: false,
};

export default (state: IStartButtonState = initialState, action: StartButtonAction) => {
  switch (action.type) {
    case actionTypes.CLICK_START:
      return {
        ...state,
        clicked: action.payload.clicked,
      };

    default:
      return state;
  }
};
