import { ChangeEvent } from 'react';

export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  handleUserName: (event: ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
}
