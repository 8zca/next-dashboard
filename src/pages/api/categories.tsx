import { NextApiRequest, NextApiResponse } from 'next'
import { categories } from '@/data/category'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    res.json(categories)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
