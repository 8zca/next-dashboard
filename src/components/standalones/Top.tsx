import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Card } from '@/components/helpers'

const Top: React.FC = () => (
  <>
    <Card className='mgb48'>コンテンツ</Card>
    <Flex justifyContent='space-between'>
      <Box maxWidth='49%' flexBasis='49%'>
        <Card>コンテンツ</Card>
      </Box>
      <Box maxWidth='49%' flexBasis='49%'>
        <Card>コンテンツ</Card>
      </Box>
    </Flex>
  </>
)

export default Top
