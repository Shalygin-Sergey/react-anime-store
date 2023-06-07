import GameCover from '../game-cover/GameCover';
import './style.css';

const GameItem = ({game}) => {
  console.log(game);
  return (
    <div className="game-item">
      <GameCover image={game.image} />
      <div className='game-item__details'>
        <span className='game-item__title'>{game.title}</span>
        <div className='game-item__genre'>
          {
            game.genres.map(genre => genre)
          }
        </div>
        <div className='game-item__buy'>Buy</div>
      </div>
    </div>
  );
}
 
export default GameItem;