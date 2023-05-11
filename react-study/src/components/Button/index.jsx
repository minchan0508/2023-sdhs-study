import * as S from './style';

function Button(props) {
  return (
    <>
      <S.Button {...props}>{props.children}</S.Button>
    </>
  );
}

export default Button;
