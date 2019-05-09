import axios from 'axios';
import { IEpisodeDto, IAction, IState, Dispatch } from './interfaces';

export const fetchDataAction = async (dispatch: Dispatch) => {
  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
  const { data } = await axios(URL);

  return dispatch({
    type: 'FETCH_DATA',
    payload: data._embedded.episodes,
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisodeDto | any,
): IAction => {
  const isFavEpisode = state.favorites.includes(episode);

  let dispatchObj = {
    type: 'ADD_FAV',
    payload: episode,
  };

  if (isFavEpisode) {
    const favWithoutEpisode = state.favorites.filter(
      (fav: IEpisodeDto) => fav.id !== episode.id,
    );
    dispatchObj = {
      type: 'RM_FAV',
      payload: favWithoutEpisode,
    };
  }

  return dispatch(dispatchObj);
};
