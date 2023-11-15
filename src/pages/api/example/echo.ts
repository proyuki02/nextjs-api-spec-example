/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

/**
 * @swagger
 * /api/example/echo:
 *   post:
 *     description: Echo the reqeust message
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: Hello from Next.js!
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello from Next.js!
 *       400:
 *         description: Bad Request
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (!req.body.message) {
    res.status(400).end();
    return;
  }
  res.status(200).json({ message: req.body.message })
}
