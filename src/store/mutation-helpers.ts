import { merge, includes, keys, pickBy, filter } from 'lodash';

const validateProperties = (obj, propertyNames) => {
  propertyNames.forEach((propName) => {
    if (!obj[propName]) {
      throw new Error(`Missing required "${propName}" property`);
    }
  });
};

const validateResultKey = (state, payload) => {
  const allKeys = keys(payload.result);
  if (allKeys.length < 1) {
    throw new Error('Undefined required property key');
  } else if (allKeys.length > 1) {
    throw new Error(`Incorrect payload.result: ${JSON.stringify(payload.result)}`);
  }
  const key = allKeys[0];
  const indices = state.result[key];
  if (!indices) {
    throw new Error(`Unknown state.result key: ${key}`);
  }
  return key;
};

const REQUIRED_PROPS = ['entities', 'result'];

const entities = (state, payload) => {
  validateProperties(payload, REQUIRED_PROPS);
  state.entities = merge({}, state.entities, payload.entities);
  state.result = {
    ...state.result,
    ...payload.result,
  };
};

const saveEntity = (state, payload) => {
  validateProperties(payload, REQUIRED_PROPS);
  const key = validateResultKey(state, payload);
  const modifiedIndex = payload.result[key][0];
  const entitiesCopy = merge({}, state.entities, payload.entities);
  entitiesCopy[key][modifiedIndex] = payload.entities[key][modifiedIndex];
  state.entities = entitiesCopy;
  const existingIndices = state.result[key];
  if (!includes(existingIndices, modifiedIndex)) { // create - push new id
    state.result = {
      ...state.result,
      [key]: [...existingIndices, modifiedIndex],
    };
  } // else update - do nothing
};

const deleteEntity = (state, deletedId, key) => {
  validateResultKey(state, { result: { [key]: [deletedId] } });
  state.entities[key] = pickBy(state.entities[key], (todo, id) => {
    return id !== deletedId;
  });
  state.result[key] = filter(state.result[key], (id) => id !== deletedId);
};

export {
  saveEntity,
  entities,
  deleteEntity,
};
