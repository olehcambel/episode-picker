import React from 'react';
import { IEpisodeProps } from './interfaces';

export default function EpisodeList(props: IEpisodeProps): JSX.Element[] {
  const { episodes, favorites, toggleFavAction, store } = props;
  const { state, dispatch } = store;

  return episodes.map(episode => (
    <section className="episode-box" key={episode.id}>
      <img src={episode.image.medium} alt={`rick-and-morty-${episode.name}`} />
      <div>{episode.name}</div>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          Season: {episode.season} Number: {episode.number}
        </div>
        <button onClick={() => toggleFavAction(state, dispatch, episode)}>
          {favorites.find(fav => fav.id === episode.id) ? 'unluv' : 'luv'}
        </button>
      </section>
    </section>
  ));
}
