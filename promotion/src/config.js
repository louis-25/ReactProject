import dotenv from 'dotenv';
dotenv.config();

export const config = {
  promotion: {
    submitAddr: process.env.PROMOTION_SUBMIT_ADDRESS,
  }
}