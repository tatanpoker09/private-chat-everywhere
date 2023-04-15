import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Validate the email and password.
        // Replace the following example with your actual authentication logic.
        const isValidUsername = email === process.env.DESIGNED_EMAIL;

        // @ts-ignore
        const isValidPassword = await bcrypt.compare(password, process.env.HASHED_PASSWORD);

        if (isValidUsername && isValidPassword) {
            // @ts-ignore
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '8h' });

            // Set the JWT in an HTTP-only cookie
            res.setHeader('Set-Cookie', serialize('CHRIS_GPT', token, { httpOnly: true, path: '/' }));

            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}