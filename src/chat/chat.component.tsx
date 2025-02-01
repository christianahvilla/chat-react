import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { TextArea, Button } from './components';
import { ChatContainer } from './style';
import { displayMessages, getMessages } from './chat.helpers';
import { IChat, IGenericMessage } from './chat.types';
import { saveMessage } from '../api/messages.api';

const Chat = ({ userName }: IChat) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<IGenericMessage[]>([]);
  // const apiUrl = `${import.meta.env.VITE_API_URL}:${
  //   import.meta.env.VITE_PORT
  // }/api`;

  const apiUrl = `${import.meta.env.VITE_API_URL}/api`;

  const loadMessages = useCallback(async () => {
    try {
      await getMessages(apiUrl, setMessages);
    } catch (error) {
      console.error('Error: :', error);
    }
  }, [apiUrl]);

  useEffect(() => {
    loadMessages();

    const intervalId = setInterval(() => loadMessages(), 5000);

    return () => clearInterval(intervalId);
  }, [apiUrl, loadMessages]);

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
      const newMessage = await saveMessage(apiUrl, {
        content: text,
        sender: userName,
      });
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    } catch (error) {
      console.error('Error: ', error);
    } finally {
      setText('');
    }
  };

  const memoizedMessages = useMemo(() => {
    return messages.sort(
      (a, b) => new Date(a.date).getDate() - new Date(b.date).getDate()
    );
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
