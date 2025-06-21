import { getDBAndRequestBody } from "../../../../utils/api-routes";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const clientPromise = new MongoClient(
  process.env.DELIVERY_SHOP_DB_URL!
).connect();

export async function getProductsByCategory(category: string) {
  const { db } = await getDBAndRequestBody(clientPromise, null);
  return await db
    .collection("products")
    .find({ categories: category })
    .toArray();
}

export const revalidate = 3600;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    if (!category) {
      return NextResponse.json(
        { message: "Category parameter required" },
        { status: 400 }
      );
    }

    const products = await getProductsByCategory(category);

    return NextResponse.json(products);
  } catch (error) {
    console.error("server error:", error);
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
}
