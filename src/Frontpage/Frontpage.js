import * as React from 'react';
import './Frontpage.css';
import DisplayPlayers from '../DisplayPlayers/DisplayPlayers';


const Frontpage = (props) => {

    return (
        <div className="Frontpage">
        <header className="Frontpage-header">
          <h1>Football Coach Assistant</h1>
          {/* <img src={props.logo} className="Frontpage-logo" alt="logo" /> */}
        </header>

          <DisplayPlayers/>
      </div>
  );
};

export default Frontpage;
