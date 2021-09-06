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

  const { wallet } = req.query

  function checkWallet(data2: string) {
    if (
      data2.indexOf('`') > 0 ||
      data2.indexOf("'") > 0 ||
      data2.indexOf('|') > 0 ||
      data2.indexOf('&') > 0 ||
      data2.indexOf('$') > 0 ||
      data2.indexOf('"') > 0
    ) {
      return false
    } else {
      return true
    }
  }

  if (checkWallet(String(wallet))) {
    if (req.method === 'GET') {
      try {
        const results = await query(`
        SELECT SUM(amount) as totalPending FROM claimable_swam where address = '${wallet}'
      `)
        return res.json(results)
      } catch (e) {
        res.status(500).json({ message: e.message })
      }
    } else {
      res
        .status(400)
        .json({ error: "Oops, I don't think there is a route for this method" })
    }
  } else {
    res.status(401).json({ error: 'Invalid Wallet' })
  }
}

export const config = {
  api: {
    externalResolver: false
  }
}
