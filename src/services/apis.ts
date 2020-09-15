import useSWR from 'swr'
import { categories } from '@/data/category'
import request from './request'

export type CategoryType = typeof categories[0]

const fetcher = (url: string) => {
  return request(url, { method: 'GET' })
}

export const useCategories = () => {
  const { data, error } = useSWR('/api/categories', fetcher, {
    refreshInterval: 0,
    shouldRetryOnError: false,
    dedupingInterval: 60 * 10000
  })
  return { data: data as CategoryType[], error }
}
