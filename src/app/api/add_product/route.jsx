import dbConnection from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request){
    const data = await request.json();
    const { category, name, price, description, sizes, details, images } = data;

    const productsCollection = await dbConnection("products");

    const newProduct = {
      category,
      name,
      price: parseFloat(price),
      description,
      sizes: sizes || [],
      details: details || [],
      images: images || [],
      createdAt: new Date(),
    };

    const result = await productsCollection.insertOne(newProduct);

     return NextResponse.json({_id: result.insertedId });

}
export async function GET() {
     const productsCollection = await dbConnection("products");
     const data = await productsCollection.find({}).toArray()
     return NextResponse.json(data)
}