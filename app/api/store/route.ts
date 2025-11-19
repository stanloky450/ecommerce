import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Store from "@/models/Store";

export async function GET() {
  try {
    await dbConnect();

    let store = await Store.findOne();

    if (!store) {
      store = await Store.create({
        storeName: "My Store",
        tagline: "Your one-stop shop for everything",
        businessEmail: "info@mystore.com",
        theme: "blue",
      });
    }

    return NextResponse.json({ store });
  } catch (error) {
    console.error("Error fetching store:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    await dbConnect();

    const data = await req.json();

    let store = await Store.findOne();

    if (!store) {
      store = await Store.create(data);
    } else {
      store = await Store.findByIdAndUpdate(store._id, data, { new: true });
    }

    return NextResponse.json({
      message: "Store updated successfully",
      store,
    });
  } catch (error) {
    console.error("Error updating store:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
