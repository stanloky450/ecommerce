import mongoose, { Model, Schema } from "mongoose";

export interface IBanner {
  _id: string;
  type: "hero" | "homepage" | "sidebar" | "promotional";
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  image: string;
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const BannerSchema = new Schema<IBanner>(
  {
    type: {
      type: String,
      enum: ["hero", "homepage", "sidebar", "promotional"],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: "",
    },
    ctaText: {
      type: String,
      default: "",
    },
    ctaLink: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Banner: Model<IBanner> =
  mongoose.models.Banner || mongoose.model<IBanner>("Banner", BannerSchema);

export default Banner;
