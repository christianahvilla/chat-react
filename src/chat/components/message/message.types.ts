import { IGenericMessage } from '../../chat.types';

export interface IStyledMessage {
  isSender: boolean;
}

export interface IMessage extends IGenericMessage {
  isSender: boolean;
}
