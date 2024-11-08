'use client'

import styles from "./page.module.css";
import Header from "../components/header"
import Description from "@/components/description";
import Link from "next/link";
import { useState , useEffect, useRef, useMemo , useTransition, useDeferredValue, useCallback, useReducer, act } from "react";

import Todo from "./todo.js";

function Home() {
  let descriptionFlag = true;

  // Every time we edit counter value the whole page rerender
  const [counter , setCounter] = useState(0);
  
  const [flag , setFlag] = useState(false);

  const click = () => {
    if(counter == 9) {
      setFlag(true);
      f = true;
    }
    setCounter(counter + 1);
  }

  // function work every time we change flag val
  // it work once at first render then it work depending on flag val changing
  useEffect(() => {
    console.log("counter = 10")
  } , [flag])

  // Reference Pointer For Input
  let inputRef = useRef<HTMLInputElement>(null);

  // on change input display input val in console
  const handleChange = (e: { target: { value: any; }; }) => {
    console.log(e.target.value);
  }

  // if ref has value focus on input
  const handleFocus = () => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }

  // flag to enable calc
  let f = false;

  // fun to calc income
  const calc = ()=> {
    let num = counter;
    for(let i = 0 ; i < 1000 ; i++) {
      num += i;
    }
    return num;
  }

  // enable calc fun when f = true
  const income = useMemo(calc , [f]);

  // use transition
  // we use it to handle priority for states to make page rinder higher
  //                                                      priority first
  // we use it in very special cases cause we want page to show every thing 
  // in a small number of rinders
  const [listt , setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const changeInput = (e: { target: { value: any; }; }) => {
    // if we want to make some code priority lower we put it in a 
    // startTransition function
    startTransition(() => {
      let l = [];
      for(let i = 0 ; i < 20000 ; i++) {
        l.push(e.target.value);
      }
      setList(l);
    })
  }


  // use deferred value
  // make change value of variable after all elements render
  const [input, setInput] = useState("");
  const deferredInput = (e: any) => {
    setInput(e.target.value);
  }

  const defferedVal = useDeferredValue(input);
  useEffect(() => {
    let l = [];
    for(let i = 0 ; i < 20000 ; i++) {
      l.push(input);
    }
    setList(l);
  } , [defferedVal]);


  // use Call Back
  // same use as use memo hook
  // only difference is that use memo return a value
  // use call back return the whole function
  // make value of callBackItems doesn't change untill user put a value
  // if we didn't use it the use effect will consider value of it change
  // every time page rerender
  // we can notice it using the "console.log(items updated!)" 

  const [callBackInput, setCallBackInput] = useState(0);
  const [callBackItems, setCallBackItems] = useState([]);
  const [callBackFlag, setCallBackFlag] = useState(false); 

  const getItems = useCallback(() => {
    return [callBackInput , callBackInput + 1 , callBackInput + 2];
  }, [callBackInput]);

  useEffect(() => {
    setCallBackItems(getItems());
    console.log("items updated!"); // here
  }, [getItems]);

  const callBackInputChange = (e: any) => {
    if(e.target.value === "") setCallBackFlag(false);
    else setCallBackFlag(true);
    setCallBackInput(parseInt(e.target.value));
  }


  // use reducer
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const ACTIONS = {
    ADD: "addTodo",
    DELETE: "deleteTodo",
    TOGGLE: "toggleTodo"
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD, payload: {name: name}});
    console.log(todos);
    setName("");
  }

  function reducer(todos: any, action: any) {
    switch(action.type) {
      case "addTodo":
        return [...todos, newTodo(action.payload.name)];
      case "toggleTodo":
        return todos.map((todo: { id: any; completed: boolean; }) => {
          if(todo.id === action.payload.id)
              return {...todo , completed: !todo.completed}
        })
      case "deleteTodo":
        return todos.filter((todo: any) => {
          todo.id !== action.payload.id;
        })  
      default: 
        return todos;
    }
  }

  function newTodo(name: string) {
    return {id: Date.now() , name: name , completed: false};
  }

  return (
    <div>

      <Header text = "I'm Text" />

      {/* if(descriptionFlag) display description */}
      {descriptionFlag && <Description />}

      {/* class = "description" (description is in page.module.css) */}
      <div className= {styles.description}>HEY</div>

      {/* Routing To Another Page */}
      <Link href="/about">Go To About</Link>

      <div>counter: {counter}</div>
      <button onClick={click}> Click To Increament Counter! </button>

      <input type="text" ref = {inputRef} onChange = {handleChange} />
      <button onClick={handleFocus}>Click To Focus</button>
    
      {/* use transition */}
      <input style={{marginBottom: "20px",marginTop: '20px', display: "block"}} placeholder="useTransition input" type="text" onChange={changeInput} />

      {/* use deferred value */}
      <input style={{marginBottom: "20px"}} type="text" placeholder="use deferred value input" onChange={deferredInput}/>
    
      {isPending 
        ? "Loading..." 
        :listt.map((item, index) => {
          return <div key={index}>{item}</div>
          // console.log(item);
      })}


      {/* use call back */}
      <input style={{marginBottom: "20px"}} type="text" placeholder="Use Call Back Input" onChange={callBackInputChange} />
      {!callBackFlag ?  
        <div></div> :
        callBackItems.map((item , index) => {
          return <div key={index}>{item}</div>
      })}


      {/* use reducer */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="use reducer" value={name}
        onChange={e => setName(e.target.value)} />
      </form>

      {todos.map((todo: any) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
    </div>
  );
}

export default Home;