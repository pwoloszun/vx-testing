// REQUEST/SUCCESS/ERROR pattern
import { filmsApi } from '../../api/films';
import { FETCH_FILMS_ERROR, FETCH_FILMS_REQUEST, FETCH_FILMS_SUCCESS } from './films-mutations';
import { setIsLoadingForContext } from './loading-spinner-pattern';

export function retrieveFilmsActionUsingQueryAction() {
  return queryAction(
    filmsApi,
    {
      REQUEST: FETCH_FILMS_REQUEST,
      SUCCESS: FETCH_FILMS_SUCCESS,
      ERROR: FETCH_FILMS_ERROR,
      context: 'films'
    }
  );
}

export function queryAction(apiCommand, { REQUEST, SUCCESS, ERROR, context }) {
  return {
    run({ commit }) {
      setIsLoadingForContext(context, true);
      commit(REQUEST);
      apiCommand()
        .then((result) => commit(SUCCESS, result))
        .catch((error) => commit(ERROR, error))
        .finally((error) => setIsLoadingForContext(context, false));
    }
  };
}

// somewhere - client code
function onBtnClick(store) {
  const action = retrieveFilmsActionUsingQueryAction();
  action.run(store);
}
