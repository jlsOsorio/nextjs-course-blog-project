import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  // Connection URL
  const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rfslo2e.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  // Use connect method to connect to the server
  const conn = await client.connect();

  return conn;
}
