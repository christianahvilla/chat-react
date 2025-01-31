import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  min-height: 50px;
  max-height: 150px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  outline: none;
  background-color: #fff;
  color: #333;
  font-family: inherit;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: #0078ff;
    box-shadow: 0 0 5px rgba(0, 120, 255, 0.5);
  }
`;
