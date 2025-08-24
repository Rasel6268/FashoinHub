// lib/mongodb.js
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.PASS}@webdevwithraseldb.abql54r.mongodb.net/?retryWrites=true&w=majority&appName=WebDevWithRaselDB`;

// Global cached client to prevent multiple connections in development
let cachedClient = global._mongoClient || null;
let cachedDb = global._mongoDb || null;

if (!cachedClient) {
  cachedClient = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  global._mongoClient = cachedClient;
}

async function dbConnection(collectionName) {
  if (!cachedClient.isConnected?.()) await cachedClient.connect();
  if (!cachedDb) cachedDb = cachedClient.db(process.env.DB_NAME);
  return cachedDb.collection(collectionName);
}

export default dbConnection;
