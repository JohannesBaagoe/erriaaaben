export const dynamic = 'force-dynamic'; // static by default, unless reading the request
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

export function GET(request: Request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}

// export default async function handler(req, res) {
//   const { body } = req;
//   return res.send(`Hello ${body.name}, you just parsed the request body!`);
// }