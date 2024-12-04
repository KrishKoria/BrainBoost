import dotenv from "dotenv";
import { Request, Response } from "express";
import Stripe from "stripe";

dotenv.config();
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("No Stripe secret key found");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createStripePaymentIntent = async (
  req: Request,
  res: Response
) => {
  let { amount } = req.body;
  if (!amount || amount <= 0) {
    amount = 50;
  }
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
    });
    res.status(200).json({
      message: "",
      data: { clientSecret: paymentIntent.client_secret },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error Processing Payment",
      error,
    });
  }
};
