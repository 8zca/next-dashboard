import React from 'react'
import { Layout } from '@/components/helpers'
import { Chart } from '@/components/standalones'

const ActivityPage: React.FC = () => {
  return (
    <Layout title='Chart - Dashboard'>
      <Chart />
    </Layout>
  )
}

export default ActivityPage
