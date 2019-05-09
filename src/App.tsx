import React from 'react';
import { Link } from '@reach/router';
import { Store } from './Store';

export default function App(props: any) {
  const { state } = React.useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode</p>
        </div>
        <div>
          <Link to="/" >Home</Link>
          <Link to="/favs">Fav counter: {state.favorites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
}
