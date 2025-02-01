import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { TextArea, Button } from './components';
import { ChatContainer } from './style';
import { displayMessages, getMessages } from './chat.helpers';
import { IChat, IGenericMessage } from './chat.types';
import io from 'socket.io-client';

const Chat = ({ userName }: IChat) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<IGenericMessage[]>([]);
  const apiUrl = `${import.meta.env.VITE_API_URL}/api`;
  const socketUrl = `${import.meta.env.VITE_SOCKET_URL}`;
  console.log(socketUrl);

  useEffect(() => {
    const socket = io(socketUrl);

    socket.on('newMessage', (newMessage: IGenericMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    try {
      (() => getMessages(apiUrl, setMessages))();
    } catch (error) {
      console.error('Error: ', error);
    }

    return () => {
      socket.off('newMessage');
      socket.off('messageError');
    };
  }, [apiUrl, socketUrl]);

  const handleText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;

    setText(value);
  };

  const handleSendMessage = async () => {
    if (!text) {
      return;
    }

    try {
      const socket = io(socketUrl);
      socket.emit('message', { content: text, sender: userName });
    } catch (error) {
      console.error('Error: ', error);
    } finally {
      setText('');
    }
  };

  const memoizedMessages = useMemo(() => {
    return messages;
  }, [messages]);

  return (
    <ChatContainer>
      {displayMessages(memoizedMessages, userName)}
      <TextArea text={text} handleText={handleText} />
      <Button text={text} handleSendMessage={handleSendMessage} />
    </ChatContainer>
  );
};

export default Chat;
