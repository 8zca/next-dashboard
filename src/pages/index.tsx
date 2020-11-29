import React, { useEffect } from 'react'
import { Layout } from '@/components/helpers'
import { Top } from '@/components/standalones'

const IndexPage: React.FC = () => {
  useEffect(() => {
    if (document) {
      console.log('ref', document.referrer)
    }
  }, [])

  return (
    <Layout title='Home'>
      <Top />
    </Layout>
  )
}

export default IndexPage
