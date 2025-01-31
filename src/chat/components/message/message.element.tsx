import { StyledMessage, StyledSender } from './message.style';
import { IMessage } from './message.types';

const Message = ({ isSender, id, content, sender }: IMessage) => {
  return (
    <StyledMessage key={id} isSender={isSender}>
      {!isSender && <StyledSender>{sender}</StyledSender>}
      {content}
    </StyledMessage>
  );
};

export default Message;
