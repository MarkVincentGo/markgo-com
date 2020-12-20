

export const toggleStart = (clicked: boolean) => ({
  type: 'CLICK_START',
  payload: {
    clicked: !clicked
  }
})