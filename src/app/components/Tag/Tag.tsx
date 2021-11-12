import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type tagProps = {
  children?: ReactNode;
};
export default function Tag({ children }: tagProps): JSX.Element {
  return <StyledTag>{children}</StyledTag>;
}

const StyledTag = styled.li`
  border: 4px solid steelblue;
  list-style-type: none;
  padding: 4px 8px;
  background-color: hotpink;
  border-radius: 4px;
  margin: 8px;
`;
