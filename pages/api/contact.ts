import { NextApiRequest, NextApiResponse } from 'next';

export interface ReqBody {
  email: string;
  name: string;
  message: string;
}

interface ResponseData {
  message: string;
  sentMessage?: ReqBody;
}

function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body as ReqBody;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    // Store it in database
    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    res.status(201).json({
      message: 'Successfully stored message!',
      sentMessage: newMessage,
    });
  }
}

export default handler;
