import * as S from './styled';
import CreatItemBox from './CreatItemBox';
function Todos() {
  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <CreatItemBox />
    </S.Container>
  );
}

export default Todos;
