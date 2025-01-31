import { createPortal } from 'react-dom';
import { IModal } from './modal.types';
import {
  Button,
  CloseButton,
  Input,
  ModalContent,
  ModalOverlay,
} from './modal.style';

const Modal = ({
  isOpen,
  onClose,
  username,
  handleUserName,
  onSave,
}: IModal) => {
  if (!isOpen) return null;
  const isDisabled = !username.length;

  return createPortal(
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2 style={{ color: 'black' }}>Ingrese su usuario</h2>
        <Input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={handleUserName}
        />
        <Button onClick={onSave} disabled={isDisabled}>
          Guardar
        </Button>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
