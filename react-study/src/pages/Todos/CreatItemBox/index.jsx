import Button from '../../../components/Button';

import * as S from './styled';

function CreatItemBox({ value, onChange, createTodoItem }) {
  const handleInputValue = e => {
    onChange(e.target.value);
  };
  const handleKeydown = e => {
    if (e.key === 'Enter') {
      createTodoItem();
    }
  };
  return (
    <S.InputBox>
      <S.Input
        value={value}
        placeholder='To do를 입력해주세요.'
        onChange={handleInputValue}
        onKeyDown={handleKeydown}
      />
      <Button onClick={createTodoItem}>등록</Button>
    </S.InputBox>
  );
}
export default CreatItemBox;
