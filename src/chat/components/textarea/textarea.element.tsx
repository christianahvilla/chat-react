import { StyledTextArea } from './textarea.style';
import { ITextarea } from './textarea.types';

const TextArea = ({ text, handleText }: ITextarea) => {
  return (
    <StyledTextArea
      placeholder="Escribe un mensaje..."
      value={text}
      onChange={handleText}
    />
  );
};

export default TextArea;
