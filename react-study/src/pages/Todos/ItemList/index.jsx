import * as S from './styled';
import Todo from '../../../components/Todo';

function ItemList({ todos, deleteItem }) {
  const deleteTodo = id => {
    deleteItem(id);
  };
  return (
    <S.ItemList>
      {todos.map(({ id, name }) => {
        return (
          <Todo key={id} todos={todos} deleteTodo={deleteTodo}>
            {name}
          </Todo>
        );
      })}
    </S.ItemList>
  );
}

export default ItemList;
