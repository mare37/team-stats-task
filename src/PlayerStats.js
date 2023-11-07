import "./App.css";
import { AiOutlinePlus } from "react-icons/ai";

/*
    IndividualPlayerStats Component represents an players entire data
    Destructure playerId, playerName and playersSessionStats object
*/
function IndividualPlayerStats({ playerId, playerName, playersSessionStats }) {
  return (
    <div
      onClick={() => {
        console.log(playerId);
      }}
      className="individual-player-stats"
    >
      <div className="player-name">{playerName}</div>

      <section>
        <div>
          <p> Goals</p>
          <span>{playersSessionStats.goals}</span>
          <AiOutlinePlus />
        </div>
        <div>
          <p>Assits</p>
          <span>{playersSessionStats.assists}</span>
          <AiOutlinePlus />
        </div>
        <div>
          <p>Complete Passes</p>
          <span>{playersSessionStats.completePasses}</span>
          <AiOutlinePlus />
        </div>
        <div>
          <p>Corners</p>
          <span>{playersSessionStats.corners}</span>
          <AiOutlinePlus />
        </div>
        <div>
          <p>Free Kicks</p>
          <span>{playersSessionStats.freeKicks}</span>
          <AiOutlinePlus />
        </div>
        <div>
          <p> Short Corners</p>
          <span>{playersSessionStats.shortCorners}</span>
          <AiOutlinePlus />
        </div>

        <div>
          <p>Tackles Won</p>
          <span>{playersSessionStats.tacklesWon}</span>
          <AiOutlinePlus />
        </div>
      </section>
    </div>
  );
}

export default IndividualPlayerStats;
