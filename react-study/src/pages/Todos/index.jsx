import { useState } from 'react';

import * as S from './styled';

import CreatItemBox from './CreatItemBox';
import ItemList from './ItemList';

function Todos() {
  const [TodoName, setTodoName] = useState('');
  const [items, setItems] = useState([]);

  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      {TodoName}
      <CreatItemBox onChange={setTodoName} />
      <ItemList />
    </S.Container>
  );
}

export default Todos;
