import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // x -> true , o -> false
  const [flag, setFlag] = useState(true);
  const [playerNum, setPlayerNum] = useState("X");

  const[counter, setCounter] = useState(0);

  const [wonFlag, setWonFlag] = useState(false);

  const[tieFlag, setTieFlag] = useState(false);

  const [grid] = useState([
    {x: 1 , y: 1, choosed: false, val:"1", won: false},
    {x: 1 , y: 2, choosed: false, val:"2", won: false},
    {x: 1 , y: 3, choosed: false, val:"3", won: false},
    {x: 2 , y: 1, choosed: false, val:"4", won: false},
    {x: 2 , y: 2, choosed: false, val:"5", won: false},
    {x: 2 , y: 3, choosed: false, val:"6", won: false},
    {x: 3 , y: 1, choosed: false, val:"7", won: false},
    {x: 3 , y: 2, choosed: false, val:"8", won: false},
    {x: 3 , y: 3, choosed: false, val:"9", won: false}
  ]);

  const click = (e) => {
    if(grid[parseInt(e.target.getAttribute("index"))].choosed === true || wonFlag || tieFlag) {
      return ;
    }  

    grid[parseInt(e.target.getAttribute("index"))].choosed = true;
  
    if(flag) {
      e.target.innerHTML = "X";
      e.target.style.color = "red";
      setPlayerNum("O");
      grid[parseInt(e.target.getAttribute("index"))].val = "x";
    }
    else{
      e.target.innerHTML = "O";
      e.target.style.color = "blue";
      setPlayerNum("X"); 
      grid[parseInt(e.target.getAttribute("index"))].val = "o";
    }

    setFlag(!flag);
    setCounter(counter + 1);
  }

  useEffect(() => {
    let f = false;
    let wonBoxes = [];
    for(let i = 0 ; i < grid.length ; i++) {
      if(i + 6 <= 8 && grid[i]?.val === grid[i+3]?.val && grid[i+3]?.val  === grid[i+6]?.val) {
        f = true;
        wonBoxes = ([i, i + 3, i + 6]);
      }
      else if(grid[i].y === 1 && grid[i]?.val === grid[i+1]?.val && grid[i+1]?.val  === grid[i+2]?.val) {
        wonBoxes = ([i, i + 1, i + 2]);
        f = true;
      }
      else if(i === 4) {
        if(grid[4]?.val === grid[0]?.val && grid[0]?.val === grid[8]?.val) {
          f = true;
          wonBoxes = ([0, 4, 8]);
        }
        else if(grid[4]?.val === grid[2]?.val && grid[2]?.val === grid[6]?.val) {
          f = true;
          wonBoxes = ([2, 4, 6]);
        }
      }
    }
    if(f) won(wonBoxes);
    if(counter === 9 && !f) {
      tie();
    } 
  }, [counter, grid]);

  function won(wonBoxes) {
    setWonFlag(true);
    for(let i = 0 ; i < wonBoxes.length; i++) {
      grid[wonBoxes[i]].won = true;
    }
  } 

  function tie() {
    setTieFlag(true);
  }

  const playAgain = () => {
    window.location.reload();
  }

  return (
    <div className='page'>
      <div 
        className='player x'
        style={{color: flag ? 'blue' : 'red',
               display: wonFlag || tieFlag ? "none" : "block"}}>
        Player <span style={{color: !flag ? 'blue' : 'red'}}>
        {playerNum}</span> Turn...
      </div>
      
      <div 
        className='won'
        style={{display: wonFlag? "block" : "none"}}
      >
          Player {playerNum === "O" ? "X" : "O"} Won!
      </div>

      <div 
        className='won'
        style={{display: tieFlag? "block" : "none"}}
      >
          Tie!
      </div>

      <div className='game'>
        {grid.map((item, index) => {
          return <div 
            className='box'
            style={{
              gridRowStart: item.x,
              gridColumnStart: item.y,
              backgroundColor: item.won ? "green" : "white"
            }}
            x = {item.x}
            y = {item.y}
            index = {index}
            onClick={click}
          ></div>
        })}
      </div>

      <button
       className='again'
       style={{display: tieFlag || wonFlag ? "block" : "none"}}
       onClick={playAgain}
       >Play Again</button>
    </div>
  );
}

export default App;
