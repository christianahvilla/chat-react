import axios from 'axios';
import { IGenericMessage } from '../chat/chat.types';

export const fetchMessages = async (
  apiUrl: string
): Promise<IGenericMessage[]> => {
  try {
    const response = await axios.get(`${apiUrl}/messages`);

    return response.data as IGenericMessage[];
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

export const saveMessage = async (
  apiUrl: string,
  body: { sender: string; content: string }
): Promise<IGenericMessage> => {
  try {
    const response = await axios.post(`${apiUrl}/messages`, body);

    return response.data as IGenericMessage;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};
