import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tile = styled.div`
  width: 50px;
  border solid brown 1px;
  flex-grow: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
`;
