export function hydrateStateWithLocalStorage(state = {}) {
  const newState = {};
  // for all items in state
  for (const key in state) {
    // if the key exists in localStorage
    if (state.hasOwnProperty(key)) {
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          newState[key] = value;
        } catch (e) {
          // handle empty string
          newState[key] = value;
        }
      } else {
        newState[key] = state[key];
      }
    }
  }
  return newState;
}
