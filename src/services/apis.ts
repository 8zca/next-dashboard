import useSWR from 'swr'
import { categories } from '@/data/category'
// import request from './request'

type CategoryType = typeof categories[0]

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useCategories = () => {
  // const fetcher = request('/api/categories', { method: 'GET' })
  const { data, error } = useSWR('/api/categories', fetcher)
  return { data: data as CategoryType[], error }
}
