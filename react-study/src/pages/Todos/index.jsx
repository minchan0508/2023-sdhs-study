import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as S from './styled';

import CreateItemBox from './CreatItemBox';
import ItemList from './ItemList';
import SearchInput from '../../components/searchInput';

function Todos() {
  const [TodoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);
  const createTodo = () => {
    setTodoName('');
    if (TodoName.trim() !== '')
      setTodos(prevState => [...prevState, { id: uuidv4(), name: TodoName }]);
    // TodoName && setTodos(prevState => [...prevState, { id: prevState.length, name: TodoName }]);
  };
  const deleteTodo = id => {
    const arr = todos.filter(e => e.id !== id);
    setTodos(arr);
  };
  const serachTodo = e => {
    let value = e.target.value;
    if (e.key === 'Enter') {
      if (value.trim() === '') return;
      const searcharr = todos.filter(e => e.name.includes(value));
    }
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
      <SearchInput placeholder='검색단어' onKeyDown={serachTodo} />
      <CreateItemBox value={TodoName} onChange={setTodoName} createTodoItem={createTodo} />
      <ItemList todos={todos} deleteItem={deleteTodo} />
    </S.Container>
  );
}

export default Todos;
