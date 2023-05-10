import { useState } from 'react';

import * as S from './styled';

import CreateItemBox from './CreatItemBox';
import ItemList from './ItemList';

function Todos() {
  const [TodoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);
  const createTodo = () => {
    setTodoName('');
    // if(TodoName != '') setTodos(prevState => [...prevState, { id: prevState.length, name: TodoName }]);
    TodoName && setTodos(prevState => [...prevState, { id: prevState.length, name: TodoName }]);
  };
  const deleteTodo = id => {
    const arr =  
  };

  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <CreateItemBox value={TodoName} onChange={setTodoName} createTodoItem={createTodo} />
      <ItemList todos={todos} deleteItem={deleteTodo} />
    </S.Container>
  );
}

export default Todos;
