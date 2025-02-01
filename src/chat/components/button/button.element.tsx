import { StyledButton } from './button.style';
import { IButton } from './button.types';

const Button = ({ text, handleSendMessage }: IButton) => {
  const isDisabled = !text;

  return (
    <StyledButton onClick={handleSendMessage} disabled={isDisabled}>
      Enviar
    </StyledButton>
  );
};

export default Button;
