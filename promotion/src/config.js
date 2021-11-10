import dotenv from 'dotenv';
dotenv.config();

export const config = {
  promotion: {
    submitAddr: process.env.REACT_APP_PROMOTION_SUBMIT_ADDR,
  }
}