'use client'
import { useState } from "react";
import './App.css'

export default function Home() {
  // previous number state
  const [prevNum , setPrevNum] = useState(0);
  // previous operation state
  const [prevOp , setPrevOp] = useState('');

  // previous number string shown on the screen
  const [prev , setPrev] = useState("");
  // current number string shown on the screen
  const [curr , setCurr] = useState("");

  // function to handle clicking on numbers
  const numClick = (e) => {
    setCurr(curr + e.target.innerHTML);
  }

  // function for AC button
  const acClick = () => {
    setCurr("");
    setPrev("");
    setPrevNum(0);
  }

  // function for Delete button
  const delClick = () => {
    let temp = curr.substring(0, curr.length - 1);
    setCurr(temp);
  }

  // function handle clicking on operation buttons
  const opClick = (e) => {
    if(curr === "-") return;
    // if user didn't enter a number do nothing
    if(curr === '') {
      if(e.target.innerHTML === '-') {
        setCurr("-");
      }
      return;
    }

    let op = "";

    if(prevOp === '') {setPrevOp(e.target.innerHTML); op = e.target.innerHTML;}
    else op = prevOp;

    let val = 0;

    // flag to check is there a previous operation or not
    let f = 1;

    if(prevNum === 0) {
      val = parseFloat(curr);
      f = 0;
    }
    else val = prevNum;
    
    if(op === '+') {
      if(f) val += parseFloat(curr);
    }
    if(op === '-') {
      if(f) val -= parseFloat(curr);
    }
    if(op === '*') {
      if(f) val *= parseFloat(curr);
    }
    if(op === '/') {
      if(f) val /= parseFloat(curr);
    }

    setPrevNum(val);
    setPrevOp(e.target.innerHTML);
    setPrev(val + ` ${e.target.innerHTML}`);
    setCurr("");
  }

  // handle equal button
  const equalClick = () => {
    let val = parseFloat(curr);

    setPrev(`${prevNum} ${prevOp} ${val}`);

    if(prevOp === '+') {
      val += prevNum;
    }
    if(prevOp === '-') {
      val = prevNum - val;
    }
    if(prevOp === '*') {
      val *= prevNum;
    }
    if(prevOp === '/') {
      val = prevNum / val;
    }

    setPrevNum(0);
    setCurr(val.toString());
    setPrevOp('');
  }

  return (
    <div className="calc">
      <div className="screen">
        <div className="prev">{prev}</div>
        <div className="current">{curr}</div>
      </div>

      <div className="buttons">
        <div className="ac" onClick={acClick}>AC</div>
        <div className="del" onClick={delClick}>DEL</div>

        <div className="division" onClick={opClick}>/</div>

        <div className="num" onClick={numClick} value={1}>1</div>  
        <div className="num" onClick={numClick} value={2}>2</div>  
        <div className="num" onClick={numClick} value={3}>3</div>

        <div className="multiply" onClick={opClick}>*</div>

        <div className="num" onClick={numClick} value={4} >4</div>  
        <div className="num" onClick={numClick} value={5} >5</div>  
        <div className="num" onClick={numClick} value={6}>6</div>

        <div className="plus" onClick={opClick}>+</div>

        <div className="num" onClick={numClick} value={7}>7</div>  
        <div className="num" onClick={numClick} value={8}>8</div>  
        <div className="num" onClick={numClick} value={9}>9</div>

        <div className="minus" onClick={opClick}>-</div>

        <div className="dot" onClick={numClick}>.</div>

        <div className="zero" onClick={numClick}>0</div>

        <div className="equal" onClick={equalClick}>=</div>  
      </div>      
    </div>
  );
}
