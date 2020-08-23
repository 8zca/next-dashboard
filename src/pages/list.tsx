import React from 'react'
import { Layout } from '@/components/helpers'
import { List } from '@/components/standalones'

const ListPage: React.FC = () => {
  return (
    <Layout title='List - Dashboard'>
      <List />
    </Layout>
  )
}

export default ListPage
