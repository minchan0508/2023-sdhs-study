import { useEffect, useState } from 'react';

import * as S from './styled';

import CreateItemBox from './CreatItemBox';
import ItemList from './ItemList';

function Todos() {
  const [TodoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);
  const createTodo = () => {
    setTodoName('');
    if (TodoName.trim() !== '')
      setTodos(prevState => [...prevState, { id: prevState.length, name: TodoName }]);
    // TodoName && setTodos(prevState => [...prevState, { id: prevState.length, name: TodoName }]);
  };
  const deleteTodo = id => {
    const arr = todos.filter(e => e.id !== id);
    setTodos(arr);
  };
  useEffect(() => {
    try {
      const parseTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(parseTodos);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    console.log('Todos 저장');
    try {
      const stringfyTodos = JSON.stringify(todos);
      localStorage.setItem('todos', stringfyTodos);
    } catch (error) {
      console.log(error);
    }
  }, [todos]);
  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <CreateItemBox value={TodoName} onChange={setTodoName} createTodoItem={createTodo} />
      <ItemList todos={todos} deleteItem={deleteTodo} />
    </S.Container>
  );
}

export default Todos;
