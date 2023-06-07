import React from "react";
import GameItem from './../../components/game-item/GameItem'
import './style.css';
import { games } from "../../data/store";

const HomePage = () => {
  return (
    <div className="home-page">
      { games.map(game => <GameItem game={game} key={game.id} />) }
    </div>
  );
}
 
export default HomePage;