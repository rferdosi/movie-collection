const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return action.playload;
    default:
      return state;
  }
};
