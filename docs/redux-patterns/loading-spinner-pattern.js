// action creator
export function setIsLoadingForContext(context, loading) {
  return {
    type: 'LOADING_FOR_CONTEXT',
    context,
    loading
  };
}

// loading reducer
function loadingReducer(state, action) {
  switch (action.type) {
    case 'LOADING_FOR_CONTEXT':
      return {
        ...state,
        [action.context]: action.loading
      };
    default:
      return state;
  }
}

// todo: many loadings == loadings list

// selector
function getLoadingForContext(state, context) {
  return !!state.loading[context];
}

// === usage - client code ===
// usage
function fetchMessages(store) {
  store.dispatch(setIsLoadingForContext('FETCH_MESSAGES', true));
  // ... fetch messages
  store.dispatch(setIsLoadingForContext('FETCH_MESSAGES', false));
}

function fetchUsers(store) {
  store.dispatch(setIsLoadingForContext('FETCH_USERS', true));
  // ... fetch messages
  store.dispatch(setIsLoadingForContext('FETCH_USERS', false));
}
