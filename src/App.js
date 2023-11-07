import "./App.css";
import data from "./data.json";
import IndividualPlayerStats from "./PlayerStats";

function App() {
  //Assign original data to newData variable
  let newData = data;

  //Retrieve playersSessionStats array
  const playersSessionStats = newData.playersSessionStats;

  //Removing duplicate entries to create an array with unique playerIds
  const unique = playersSessionStats.filter((obj, index) => {
    return (
      index ===
      playersSessionStats.findIndex((o) => obj.playerId === o.playerId)
    );
  });

  //Initialize playerStats Object that will track all individual player stats.
  const playerStats = {
    assists: null,
    yellowCards: null,
    completePasses: null,
    freeKicks: null,
    corners: null,
    shortCorners: null,
    tacklesWon: null,
    acceptedPasses: null,
    attemptedPasses: null,
    dribblesCompleted: null,
    goals: null,
  };

  //Create a finalArray with each player stats.
  const finalArray = unique.map((item) => {
    //Create player object that will be pushed into finalArray for each individual player
    const obj = {};

    obj.playerId = item.playerId;
    obj.playerName = item.playerName;
    obj.playersSessionStats = playerStats;
    obj.sessionStatId = item.sessionStatId;
    obj.lastUpdated = item.lastUpdated;

    return obj;
  });

  //Replacing old playersSessionStats array with finalArray.
  //Data is now inorder and ready for sorting , mapping and display
  newData.playersSessionStats = finalArray;

  console.log();

  return (
    <div className="App">
      <div>Team Stats</div>
      <div>Data Assistant: {newData.dataAssistantName}</div>
      {newData.playersSessionStats
        .sort(function (a, b) {
          return b.playerName < a.playerName ? 1 : -1;
        })
        .map((item) => {
          return (
            <IndividualPlayerStats
              key={item.playerId}
              playerId={item.playerId}
              playerName={item.playerName}
              playersSessionStats={item.playersSessionStats}
            />
          );
        })}
    </div>
  );
}

export default App;
