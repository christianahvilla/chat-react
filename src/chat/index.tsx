import { ChangeEvent, useState } from 'react';
import { TextArea, Button } from './components';
import { ChatContainer } from './style';
import { MESSAGE_MOCKS } from './chat.mock';
import { displayMessages } from './chat.helpers';
import { IChat } from './chat.types';

const Chat = ({ userName }: IChat) => {
  const [text, setText] = useState('');

  const handleText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;

    setText(value);
  };

  const messages = MESSAGE_MOCKS;

  return (
    <ChatContainer>
      {displayMessages(messages, userName)}
      <TextArea text={text} handleText={handleText} />
      <Button text={text} />
    </ChatContainer>
  );
};

export default Chat;
