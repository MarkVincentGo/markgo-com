export default (state: any = {clicked: false}, action: any) => {
  switch (action.type) {
    case 'CLICK_START':
      return {
        ...state,
        clicked: state ? !state.clicked : false
      }
      default:
        return {...state}
  }
  return state
}

