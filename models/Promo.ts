import mongoose, { Model, Schema } from "mongoose";

export interface IPromo {
  _id: string;
  code: string;
  type: "percentage" | "fixed";
  value: number;
  description?: string;
  isActive: boolean;
  validFrom: Date;
  validTo: Date;
  usageLimit?: number;
  usedCount: number;
  minPurchase?: number;
  createdAt: Date;
  updatedAt: Date;
}

const PromoSchema = new Schema<IPromo>(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    type: {
      type: String,
      enum: ["percentage", "fixed"],
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    validFrom: {
      type: Date,
      required: true,
    },
    validTo: {
      type: Date,
      required: true,
    },
    usageLimit: {
      type: Number,
    },
    usedCount: {
      type: Number,
      default: 0,
    },
    minPurchase: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Promo: Model<IPromo> =
  mongoose.models.Promo || mongoose.model<IPromo>("Promo", PromoSchema);

export default Promo;
