import React from 'react'
import { Layout } from '@/components/helpers'
import { Activity } from '@/components/standalones'

const ActivityPage: React.FC = () => {
  return (
    <Layout title='List'>
      <Activity />
    </Layout>
  )
}

export default ActivityPage
