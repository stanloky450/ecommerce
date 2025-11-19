import mongoose, { Model, Schema } from "mongoose";

export interface IVariant {
  name: string;
  value: string;
  priceAdjustment?: number;
}

export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  images: string[];
  price: number;
  compareAtPrice?: number;
  variants: IVariant[];
  stock: number;
  sku: string;
  tags: string[];
  isVisible: boolean;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const VariantSchema = new Schema<IVariant>({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  priceAdjustment: {
    type: Number,
    default: 0,
  },
});

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
    price: {
      type: Number,
      required: true,
    },
    compareAtPrice: {
      type: Number,
    },
    variants: {
      type: [VariantSchema],
      default: [],
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.index({ name: "text", description: "text", tags: "text" });

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
