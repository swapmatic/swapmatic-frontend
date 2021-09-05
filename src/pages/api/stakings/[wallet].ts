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
    SELECT * FROM ((SELECT  t1.id as id,
                            t1.project_name as projectName,
                            t1.pool_type as poolType,
                            t1.pool_name as poolName,
                            (SELECT total FROM staking_total) as poolBalance,
                            t1.holder_address as holderAddress,
                            t1.holder_balance as holderBalance,
                            t1.holder_share as holderShare,
                            t1.active as active,
                            t1.timestamped as timeStamped
                    FROM staking as t1 WHERE t1.holder_address = '${wallet}' )
                      UNION
                    (SELECT t2.id,
                            t2.projectName,
                            t2.poolType,
                            t2.poolName,
                            t2.poolBalance,
                            'undefined' as holderAddress,
                            t2.holderBalance,
                            t2.holderShare,
                            t2.active,
                            t2.timeStamped
                      FROM staking_view as t2)) as t3
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
