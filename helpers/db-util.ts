import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  // Connection URL
  const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.rfslo2e.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  // Use connect method to connect to the server
  const conn = await client.connect();

  return conn;
}
