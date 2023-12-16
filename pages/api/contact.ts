import { connectDatabase } from '@/helpers/db-util';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
export interface ReqBody {
  id?: ObjectId;
  email: string;
  name: string;
  message: string;
}

interface ResponseData {
  message: string;
  sentMessage?: ReqBody;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
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
    const newMessage: ReqBody = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    const db = client.db(process.env.mongodb_database);

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res.status(201).json({
      message: 'Successfully stored message!',
      sentMessage: newMessage,
    });
  }
}

export default handler;
