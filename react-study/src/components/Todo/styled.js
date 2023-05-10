import styled from 'styled-components';

import { Button } from '../Button/style';

export const Container = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 5px;
`;

export const Title = styled.p`
  font-size: 16px;
`;
export const Btnbox = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
  > ${Button} {
    background: #d6d6d6;
    border: none;
  }
`;
