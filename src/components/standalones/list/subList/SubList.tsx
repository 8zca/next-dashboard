import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from 'reflexbox/styled-components'
import SubListItem from './SubListItem'
import { items } from '@/data/category'

type Props = {
  id: number
}

const SubList: React.FC<Props> = ({ id }) => {
  const [data, setData] = useState(items[id])

  const clickSortHandler = (index: number, up: boolean) => {
    const tmp = data[index]
    const tmpData = [...data]
    if (up && index > 0) {
      tmpData[index] = tmpData[index - 1]
      tmpData[index - 1] = tmp
    } else if (!up && data[index + 1]) {
      tmpData[index] = tmpData[index + 1]
      tmpData[index + 1] = tmp
    }

    setData(tmpData)
  }

  return (
    <Wrapper>
      <li className='header'>
        <Box width='60px'>公開</Box>
        <Box width='60px'>順番</Box>
        <Box width='100px'>商品ID</Box>
        <Box width='150px'>商品名</Box>
        <Box width='100px'>金額</Box>
        <Box flex={1}>説明</Box>
        <Box width='40px' />
        <Box width='40px' />
      </li>
      {data.map((row, index) => (
        <SubListItem
          key={row.id}
          data={row}
          index={index}
          last={index === items[id].length - 1}
          clickSortHandler={clickSortHandler}
        />
      ))}
    </Wrapper>
  )
}

export default SubList

const Wrapper = styled.ul`
  list-style: none;
  li {
    display: flex;
    height: 56px;
    padding: 0 8px;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    &.header {
      font-size: 12px;
    }
  }
`
