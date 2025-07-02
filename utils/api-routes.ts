import { MongoClient } from "mongodb";

export const getDBAndRequestBody = async (
  clientPromise: Promise<MongoClient>,
  request: Request | null
) => {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DELIVERY_SHOP_DB_NAME);

    if (request) {
      const requestBody = await request.json();
      return { db, requestBody };
    }

    return { db };
  } catch (error) {
    console.error("Database connection error", error);
    throw error;
  }
};

const client = new MongoClient(process.env.DELIVERY_SHOP_DB_URL!);

const clientPromise = client.connect();

export const getDB = async () => {
  return (await clientPromise).db(process.env.DELIVERY_SHOP_DB_NAME!);
};
