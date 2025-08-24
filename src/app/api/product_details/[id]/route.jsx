import { ObjectId } from "mongodb";
import dbConnection from "@/app/lib/mongodb";

export async function GET(req, { params }) {
  try {
    const { id } = await params; // ✅ await params
    const collection = await dbConnection("products");

    const product = await collection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
