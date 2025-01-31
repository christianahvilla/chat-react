import { ChangeEvent } from 'react';

export interface ITextarea {
  text: string;
  handleText: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
