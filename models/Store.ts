import mongoose, { Model, Schema } from "mongoose";

export interface ISocialMedia {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  twitter?: string;
  youtube?: string;
  whatsapp?: string;
}

export interface IStore {
  _id: string;
  storeName: string;
  tagline: string;
  businessEmail: string;
  customerCarePhone: string;
  storeAddress: string;
  aboutSection: string;
  footerText: string;
  logo?: string;
  favicon?: string;
  socialMedia: ISocialMedia;
  showSocialIcons: boolean;
  theme: "blue" | "pink" | "green" | "black";
  createdAt: Date;
  updatedAt: Date;
}

const StoreSchema = new Schema<IStore>(
  {
    storeName: {
      type: String,
      required: true,
      default: "My Store",
    },
    tagline: {
      type: String,
      default: "Your one-stop shop for everything",
    },
    businessEmail: {
      type: String,
      required: true,
    },
    customerCarePhone: {
      type: String,
      default: "",
    },
    storeAddress: {
      type: String,
      default: "",
    },
    aboutSection: {
      type: String,
      default: "",
    },
    footerText: {
      type: String,
      default: "All rights reserved",
    },
    logo: {
      type: String,
      default: "",
    },
    favicon: {
      type: String,
      default: "",
    },
    socialMedia: {
      facebook: { type: String, default: "" },
      instagram: { type: String, default: "" },
      tiktok: { type: String, default: "" },
      twitter: { type: String, default: "" },
      youtube: { type: String, default: "" },
      whatsapp: { type: String, default: "" },
    },
    showSocialIcons: {
      type: Boolean,
      default: true,
    },
    theme: {
      type: String,
      enum: ["blue", "pink", "green", "black"],
      default: "blue",
    },
  },
  {
    timestamps: true,
  }
);

const Store: Model<IStore> =
  mongoose.models.Store || mongoose.model<IStore>("Store", StoreSchema);

export default Store;
