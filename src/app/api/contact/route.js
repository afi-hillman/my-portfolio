// app/api/test/route.js
import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";

export async function GET() {
  await dbConnect();

  const collections = await mongoose.connection.db.listCollections().toArray();
  const collectionNames = collections.map((col) => col.name);

  return new Response(JSON.stringify({ collections: collectionNames }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
