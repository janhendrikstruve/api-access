import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  large?: boolean;
};
function Button({ children, large }: ButtonProps): JSX.Element {
  return <StyledButton large={large}>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button<Partial<ButtonProps>>`
  color: #000;
  background: linear-gradient(180deg, #ffbb3b, #ffa90a);
  font-size: ${(props) => (props.large ? '1.8em' : '0.8em')};
  padding: 0.8em 2em;
  border: none;
  border-radius: 0.4em;
  text-transform: uppercase;
`;
