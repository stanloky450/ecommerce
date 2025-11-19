import mongoose, { Model, Schema } from "mongoose";

export interface IFlashSale {
  _id: string;
  title: string;
  description?: string;
  discountPercentage: number;
  productIds: string[];
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  bannerImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

const FlashSaleSchema = new Schema<IFlashSale>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    discountPercentage: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    productIds: {
      type: [String],
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    bannerImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const FlashSale: Model<IFlashSale> =
  mongoose.models.FlashSale ||
  mongoose.model<IFlashSale>("FlashSale", FlashSaleSchema);

export default FlashSale;
