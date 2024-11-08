import { useRef, useState } from 'react';
import './App.css';

function App() {
  
  // state for list
  const [todos , setTodos] = useState([]);

  // Refrence pointer for input
  let inputRef = useRef(null);

  // add button function
  const handleAdd = () => {
    if(inputRef.current) {
      let text = inputRef.current.value;
      setTodos([...todos , {finished: false , text}]);
      
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }

  // function to handle done
  const done = (index) => {
    let newTodos = [...todos];
    newTodos[index].finished = !newTodos[index].finished;
    setTodos(newTodos);
  }

  // function to handle delete
  const handleDelete = (index) => {
    const temp = [...todos];
    temp.splice(index , 1);
    setTodos(temp);
    console.log(temp);
    console.log(todos);
  }
  
  return (
    <div className="App">
      <h2>To Do List</h2>

      <ul>
        {
        todos.map(
          ({finished, text}, index) => {
          return <li key = {index} onClick={() => done(index)}><div className={finished? 'done':""}>- {text}</div> <span onClick={(e) => {e.stopPropagation(); handleDelete(index);}}>X</span></li>;
        })}
      </ul>

      <div>
        <input type='text' ref = {inputRef} autoFocus/>
        <button onClick={handleAdd} >Add</button>
      </div>
    </div>
  );
}

export default App;
