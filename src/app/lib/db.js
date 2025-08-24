
import clientPromise from "./mongodb";

/**
 * Fetch documents from any collection dynamically
 * @param {string} collectionName - MongoDB collection name
 * @param {object} filter - Optional MongoDB filter (default = {})
 */
export async function fetchCollection(collectionName, filter = {}) {
  try {
    const client = await clientPromise;
    const db = client.db("WebDevWithRaselDB"); // your database name
    const collection = db.collection(collectionName);
    const data = await collection.find(filter).toArray();
    return data;
  } catch (error) {
    console.error("MongoDB fetch error:", error);
    throw error;
  }
}
