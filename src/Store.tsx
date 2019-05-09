import React from 'react';
import { IState, IAction } from './interfaces';

const initialState: IState = {
  episodes: [],
  favorites: [],
};

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    case 'ADD_FAV':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'RM_FAV':
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

export const Store = React.createContext<any>(initialState);

export const StoreProvider = (props: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
};
