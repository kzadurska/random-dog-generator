import styled from 'styled-components';

const Button = styled.button.attrs({
  type: 'button',
})`
  width: 150px;
  height: 30px;
  margin: 8px;
  cursor: pointer;
`;

export const ModalButton = styled(Button)`
  width: 300px;
  margin: 0;
  margin-top: 8px;
`;

export default Button;
