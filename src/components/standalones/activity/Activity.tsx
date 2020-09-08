import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { categories } from '@/data/category'
import { Card, Select } from '@/components/helpers'
import { SummaryGraph } from '@/components/standalones'

const Activity: React.FC = () => {
  const [selected, setSelected] = useState<React.ReactText>('')
  const options = categories.map((c) => ({ id: c.id, name: c.name }))
  return (
    <>
      <p>売れ行き</p>
      <Select options={options} clickHandler={(id) => setSelected(id)} defaultId={selected} className='mgb32' />
      <Card className='mgb48'>
        <p>週次サマリ</p>
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
    </>
  )
}

export default Activity

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
