import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    
    // console.log("REQ BODY", req.body);

      res.status(200).json({ text: 'Hello' });

  } else {
    // Handle any other HTTP method
  }
}