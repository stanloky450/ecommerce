import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Promo from "@/models/Promo";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    const activeOnly = searchParams.get("active");

    let query: any = {};

    if (code) {
      query.code = code.toUpperCase();
    }

    if (activeOnly === "true") {
      query.isActive = true;
      query.validFrom = { $lte: new Date() };
      query.validTo = { $gte: new Date() };
    }

    const promos = await Promo.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ promos });
  } catch (error) {
    console.error("Error fetching promos:", error);
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

    data.code = data.code.toUpperCase();

    const existingPromo = await Promo.findOne({ code: data.code });
    if (existingPromo) {
      return NextResponse.json(
        { error: "Promo code already exists" },
        { status: 400 }
      );
    }

    const promo = await Promo.create(data);

    return NextResponse.json(
      {
        message: "Promo created successfully",
        promo,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating promo:", error);
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Promo code already exists" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
