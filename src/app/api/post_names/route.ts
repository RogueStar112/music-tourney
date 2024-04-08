
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const formData = req.body;

    // Process the form data 
    // console.log('Received form data:', formData);
    // console.log(formData);

    // Send a success response (you can replace this with your actual logic)
    res.status(200).json({ message: 'Form data received!' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}