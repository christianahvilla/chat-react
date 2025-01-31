import { IGenericMessage } from './chat.types';
import { Message } from './components';

const getIsSender = (user: string, sender: string) =>
  user.localeCompare(sender) === 0;

export const displayMessages = (messages: IGenericMessage[], user: string) => {
  if (!Array.isArray(messages) || !messages.length) {
    return <></>;
  }

  return messages.map(({ id, content, sender }) => {
    const isSender = getIsSender(user, sender);

    return (
      <Message isSender={isSender} content={content} id={id} sender={sender} />
    );
  });
};
