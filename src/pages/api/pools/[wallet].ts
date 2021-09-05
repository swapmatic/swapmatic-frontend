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
        console.log(wallet !== 'undefined')
        const results = await query(`
          SELECT  t1.id AS id,
                  t1.pool_type AS system,
                  t1.pool_name as poolName,
                  t1.pool_link AS swapLink,
                  t1.pool_trade AS swapTrade,
                  t1.pool_boost AS apr,
                  t1.active AS active,
                  t1.secondary_asset_name AS secondaryAssetName,
                  t1.pool_tokenbalance AS poolTokenBalance,
                  (SELECT usd_price FROM price) AS swamPrice,
                  t1.pool_balance_update AS poolBalanceUpdate,
                  t2.holder_address AS holderAddress,
                  t2.holder_balance AS holderBalance,
                  t2.holder_balance_usd AS holderBalanceUsd,
                  t2.pending_rewards_swam AS pendingRewardsSwam,
                  t2.pending_rewards_usd AS pendingRewardsUsd,
                  t2.holder_share AS holderShare,
                  t2.timestamped
        FROM pool_view as t1
        LEFT OUTER JOIN user_shares AS t2
          ON t1.pool_name = t2.pool_name
          AND t1.pool_type = t2.pool_type
          AND t2.holder_address = '${wallet}'
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
