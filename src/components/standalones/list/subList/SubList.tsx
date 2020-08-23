import React from 'react'
import styled from 'styled-components'
import { Box } from 'reflexbox/styled-components'
import SubListItem from './SubListItem'

const SubList: React.FC = () => {
  const ids = [1, 2, 3, 4, 5]

  // TODO: implements
  const clickSortHandler = (_order: number, _up: boolean) => {}

  return (
    <Wrapper>
      <li className='header'>
        <Box width='40px' />
        <Box width='100px'>商品ID</Box>
        <Box width='150px'>商品名</Box>
        <Box width='100px'>金額</Box>
        <Box maxWidth='300px' flex={1}>
          説明
        </Box>
        <Box width='40px' />
        <Box width='40px' />
        <Box width='40px' />
      </li>
      {ids.map((id, index) => (
        <SubListItem
          key={id}
          id={id}
          order={index}
          last={index === ids.length - 1}
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
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    &.header {
      font-size: 12px;
    }
  }
`
