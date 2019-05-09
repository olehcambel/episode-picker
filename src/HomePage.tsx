import React from 'react';
import { Store } from './Store';
import { fetchDataAction, toggleFavAction } from './Actions';

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    if (!state.episodes.length) fetchDataAction(dispatch);
  });

  return (
    <React.Suspense fallback={<div>loading</div>}>
      <section className="episode-layout">
        <EpisodeList
          episodes={state.episodes}
          favorites={state.favorites}
          store={{ state, dispatch }}
          toggleFavAction={toggleFavAction}
        />
      </section>
    </React.Suspense>
  );
}
