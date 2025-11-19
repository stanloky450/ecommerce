import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Banner from "@/models/Banner";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");
    const activeOnly = searchParams.get("active");

    let query: any = {};

    if (type) {
      query.type = type;
    }

    if (activeOnly === "true") {
      query.isActive = true;
    }

    const banners = await Banner.find(query).sort({ order: 1, createdAt: -1 });

    return NextResponse.json({ banners });
  } catch (error) {
    console.error("Error fetching banners:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const data = await req.json();

    const banner = await Banner.create(data);

    return NextResponse.json(
      {
        message: "Banner created successfully",
        banner,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating banner:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
