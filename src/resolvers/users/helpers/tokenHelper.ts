import moment from "moment";
import jwt from 'jsonwebtoken';
import { UserWithPassword } from "../types";

export function signToken(
    data: UserWithPassword,
    ttl: number,
    ttlUnit: 'days' | 'months' | 'weeks' | 'hours' | 'minutes', 
    secret: string | undefined = process.env.jwtSecret || 'somewrongsecret'): string {
      console.log(secret);
      return jwt.sign(
        {
          exp: moment().add(ttl, ttlUnit).unix(),
          data,
        },
        secret,
      );
  }