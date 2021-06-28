import ColorBox from './components/ColorBox'
import './App.scss';
import TodoList from './components/ToDoList';
import React,{useState} from 'react';

function App() {
  const [todoList,settodoList] = useState([
    {id: 1 ,title: 'Hoc Reactjs'},
    {id: 2 ,title: 'Hoc Javascrip'},
    {id: 3 ,title: 'Hoc HTML&CSS'}
  ])
function handleTodoClick(todo){
  const index = todoList.findIndex(x => x.id === todo.id)  
  if(index < 0) return;
  const newTodoList = [...todoList];
  newTodoList.splice(index, 1);
  settodoList(newTodoList);

}
  return (
    <div className="App">
      <h1>Hello react hooks</h1>
      <ColorBox/>
      <h2>TodoList</h2>
      <TodoList todos={ todoList } onTodoClick={ handleTodoClick }/>
    </div>
  );
}

export default App;
