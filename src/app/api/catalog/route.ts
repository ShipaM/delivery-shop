import { getDB, getDBAndRequestBody } from "../../../../utils/api-routes";
import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { CatalogProps } from "@/types/catalog";

const clientPromise = new MongoClient(
  process.env.DELIVERY_SHOP_DB_URL!
).connect();

export async function getCatalog() {
  const { db } = await getDBAndRequestBody(clientPromise, null);
  return await db.collection("catalogs").find().toArray();
}
export const revalidate = 3600;

export async function GET() {
  try {
    const catalogs = await getCatalog();

    return NextResponse.json(catalogs);
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const db = await getDB();
    const updatedCategories: CatalogProps[] = await request.json();

    const bulkOps = updatedCategories.map((category) => ({
      updateOne: {
        filter: { _id: new ObjectId(category._id) },
        update: {
          $set: {
            order: category.order,
            title: category.title,
            img: category.img,
            colSpan: category.colSpan,
            tabletColSpan: category.tabletColSpan,
            mobileColSpan: category.mobileColSpan,
          },
        },
      },
    }));

    const result = await db.collection("catalogs").bulkWrite(bulkOps);

    return NextResponse.json({
      success: true,
      updatedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("Ошибка при обновлении порядка категорий:", error);
    return NextResponse.json(
      { message: "Ошибка при обновлении порядка категорий" },
      { status: 500 }
    );
  }
}
