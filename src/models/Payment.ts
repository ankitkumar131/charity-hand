import mongoose, { Document, Schema } from "mongoose";

export interface IPayment extends Document {
  orderId: string;
  paymentId?: string;
  signature?: string;
  amount: number;
  currency: string;
  status: "created" | "paid" | "failed";
  name?: string;
  mobileNumber?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const PaymentSchema = new Schema<IPayment>(
  {
    orderId: { type: String, required: true },
    paymentId: { type: String },
    signature: { type: String },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    status: {
      type: String,
      enum: ["created", "paid", "failed"],
      required: true,
    },
    name: { type: String },
    mobileNumber: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Payment ||
  mongoose.model<IPayment>("Payment", PaymentSchema);
