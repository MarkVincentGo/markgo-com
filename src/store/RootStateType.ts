import { IStartButtonState } from './reducers/startButton';
import { IWindowsState } from './reducers/window';

export interface RootState {
  windows: IWindowsState;
  startButton: IStartButtonState
}
