import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'reflexbox/styled-components'
import { Card } from '@/components/helpers'
import { SummaryGraph } from '@/components/standalones'

const Top: React.FC = () => (
  <>
    <Card className='mgb48'>
      <p>週次売上</p>
      <SummaryGraph className='mgb16' />
      <Flex justifyContent='space-between'>
        <ColorIndicator>
          先週比指標
          <span>+15</span>
        </ColorIndicator>
        <Flex>
          <Indicator className='mgr32'>
            平均決済金額
            <span>&yen; 5,678</span>
          </Indicator>
          <Indicator>
            日次決済数
            <span>1,234</span>
          </Indicator>
        </Flex>
      </Flex>
    </Card>
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

const Indicator = styled.div`
  height: 46px;
  padding: 4px 8px;
  line-height: 1.6;
  > span {
    font-size: 16px;
    display: block;
  }
`
const ColorIndicator = styled(Indicator)`
  width: 114px;
  background: ${(props) => props.theme.colors.graph.areaBg};
  border-radius: 8px;
  > span {
    color: ${(props) => props.theme.colors.text.green};
  }
`
