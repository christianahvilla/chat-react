import { StyledButton } from './button.style';
import { IButton } from './button.types';

const Button = ({ text }: IButton) => {
  const isDisabled = !text;

  return <StyledButton disabled={isDisabled}>Enviar</StyledButton>;
};

export default Button;
