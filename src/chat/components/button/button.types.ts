export interface IButton {
  text: string;
  handleSendMessage: () => Promise<void>;
}
