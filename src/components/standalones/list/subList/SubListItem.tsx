import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from 'reflexbox/styled-components'

type Props = {
  id: number
  order: number
  last: boolean
  clickSortHandler: (order: number, up: boolean) => void
}

const SubListItem: React.FC<Props> = ({ id, order, last, clickSortHandler }) => {
  const [status, setStatus] = useState<boolean>(true)

  const upSortableClassName = order === 0 ? '' : 'sortable'
  const downSortableClassName = last ? '' : 'sortable'
  return (
    <Wrapper className={status ? 'public' : 'private'}>
      <Order>
        <span className={upSortableClassName} onClick={() => clickSortHandler(order, true)}>
          ↑
        </span>
        <span className={downSortableClassName} onClick={() => clickSortHandler(order, false)}>
          ↓
        </span>
      </Order>
      <Box width='100px'>{id}</Box>
      <Box width='150px'>テスト商品{getRandomInt(1, 10000)}</Box>
      <Box width='100px'>&yen; {(getRandomInt(100, 1000) * 100).toLocaleString()}</Box>
      <Description>ここに説明が入ります。ここに説明が入ります。</Description>
      <Edit width='40px'>削除</Edit>
      <Edit width='40px'>編集</Edit>
      <Edit width='40px' onClick={() => setStatus(!status)}>
        <Status className={status ? 'public' : 'private'}>{status ? 'ON' : 'OFF'}</Status>
      </Edit>
    </Wrapper>
  )
}

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export default SubListItem

const Wrapper = styled.li`
  padding: 0 8px;
  border-top: 1px solid ${(props) => props.theme.colors.border.primary};
  &.private {
    color: ${(props) => props.theme.colors.action.disabled};
  }
  &:hover {
    background: ${(props) => props.theme.colors.action.hover};
  }
`
const Order = styled.div`
  width: 40px;
  color: ${(props) => props.theme.colors.action.disabled};

  .sortable {
    color: ${(props) => props.theme.colors.text.link};
    cursor: pointer;
    .private & {
      color: ${(props) => props.theme.colors.action.disabled};
      cursor: default;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`
const Description = styled(Box)`
  flex: 1;
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const Edit = styled(Box)`
  color: ${(props) => props.theme.colors.text.link};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
const Status = styled.span`
  display: inline-block;
  padding: 0 4px;
  border-radius: 4px;
  transition: all 0.2s;
  width: 40px;
  text-align: center;
  color: ${(props) => props.theme.colors.text.contrast};
  &.public {
    background: ${(props) => props.theme.colors.text.link};
  }
  &.private {
    background: ${(props) => props.theme.colors.action.disabled};
  }
`
