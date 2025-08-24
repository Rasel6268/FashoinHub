// app/api/users/route.js
import dbConnection from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Get the collection
    const usersCollection = await dbConnection("users");

    // Fetch all users
    const users = await usersCollection.find({}).toArray();

    // Return plain JSON
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
