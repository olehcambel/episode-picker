/**
|--------------------------------------------------
| All interfaces in one place
|--------------------------------------------------
*/
export type Dispatch = React.Dispatch<IAction>

export interface IState {
  episodes: IEpisodeDto[];
  favorites: IEpisodeDto[];
}

export interface IAction {
  type: string;
  payload: IEpisodeDto[] | any;
}

export interface IEpisodeDto {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: {
    self: {
      href: string;
    };
  };
}

export interface IStore {
  state: IState;
  dispatch: Dispatch;

}

export interface IEpisodeProps {
  episodes: IEpisodeDto[];
  favorites: IEpisodeDto[];
  store: IStore;
  toggleFavAction: (state: IState, dispatch: Dispatch, episode: IEpisodeDto) => IAction;
}
