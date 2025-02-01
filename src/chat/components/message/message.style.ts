import styled from 'styled-components';
import { IStyledMessage } from './message.types';
import { getRandomColor } from './message.helpers';

export const StyledMessage = styled.div<IStyledMessage>`
  max-width: 60%;
  padding: 10px 15px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  background-color: ${({ isSender }) => (isSender ? '#0078FF' : '#E5E5EA')};
  color: ${({ isSender }) => (isSender ? '#FFF' : '#000')};
  align-self: ${({ isSender }) => (isSender ? 'flex-end' : 'flex-start')};
  margin: 5px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: start;
`;

export const StyledSender = styled.p`
  color: ${getRandomColor()};
  margin: 0;
  justify-content: start;
  display: flex;
  font-weight: bold;
`;
