import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}

/**
 * @swagger
 * /api/example/hello:
 *   get:
 *     description: Returns the hello world
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
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
