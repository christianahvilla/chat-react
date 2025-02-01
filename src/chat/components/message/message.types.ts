import { IGenericMessage } from '../../chat.types';

export interface IStyledMessage {
  isSender: boolean;
}

export interface IMessage extends Omit<IGenericMessage, 'date'> {
  isSender: boolean;
}
