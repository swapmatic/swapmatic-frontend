import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import { query } from '@/services/database/db'
import initMiddleware from '@/services/database/init-middleware'

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET']
  })
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await cors(req, res)

  if (req.method === 'GET') {
    try {
      const results = await query('SELECT usd_price as usdPrice FROM price')
      return res.json(results)
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  } else {
    res
      .status(400)
      .json({ error: "Oops, I don't think there is a route for this method" })
  }
}

export const config = {
  api: {
    externalResolver: false
  }
}
