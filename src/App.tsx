import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import Chat from './chat';
import { Button, Modal } from './modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const savedUsername = localStorage.getItem('username') ?? '';

  useEffect(() => {
    if (savedUsername) {
      setUsername(savedUsername);
    } else {
      setIsOpen(true);
    }
  }, []);

  const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setUsername(value);
  };

  const handleSave = () => {
    if (username.trim() !== '') {
      localStorage.setItem('username', username);
      setIsOpen(false);
      alert(`Usuario guardado: ${username}`);
    }
  };

  const handleOpen = () => {
    setIsOpen(!open);
  };

  const handleCloseSesion = () => {
    localStorage.setItem('username', '');
    setUsername('');
    window.location.reload();
  };

  return (
    <>
      <h1>Bienvenido, {savedUsername || 'Invitado'}!</h1>
      <Button onClick={handleCloseSesion}>Cerrar sesión</Button>

      <Modal
        isOpen={isOpen}
        onClose={handleOpen}
        username={username}
        handleUserName={handleUserName}
        onSave={handleSave}
      />
      <Chat userName={savedUsername} />
    </>
  );
}

export default App;
