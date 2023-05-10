import { useState } from 'react';

import * as S from './styled';

import CreatItemBox from './CreatItemBox';
import ItemList from './ItemList';

function Todos() {
  const [TodoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);
  const createTodo = () => {
    setTodoName('');
    setTodos(prevState => [...prevState, { id: prevState.length, name: TodoName }]);
  };
  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <CreatItemBox value={TodoName} onChange={setTodoName} createTodoItem={createTodo} />
      <ItemList todos={todos} />
    </S.Container>
  );
}

export default Todos;
