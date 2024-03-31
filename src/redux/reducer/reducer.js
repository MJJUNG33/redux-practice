let initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  if (action.type === "increment") {
    return { ...state, count: state.count + action.payload.num };
  }
  if (action.type === "decrement") {
    return { ...state, count: state.count - 1 };
  }
  return { ...state };
}

export default reducer;
