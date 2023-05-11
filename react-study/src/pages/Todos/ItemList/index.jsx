import * as S from './styled';
import Todo from '../../../components/Todo';

function ItemList({ todos, deleteItem }) {
  return (
    <S.ItemList>
      {todos.map(({ id, name }) => {
        const deleteTodo = () => {
          deleteItem(id);
        };
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
