import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from 'reflexbox/styled-components'

type Props = {
  index: number
  last: boolean
  data: { id: number; name: string; description: string; price: number }
  clickSortHandler: (index: number, up: boolean) => void
}

const SubListItem: React.FC<Props> = (props) => {
  const [status, setStatus] = useState<boolean>(true)

  const upSortableClassName = props.index === 0 ? '' : 'sortable'
  const downSortableClassName = props.last ? '' : 'sortable'
  return (
    <Wrapper className={status ? 'public' : 'private'}>
      <Box width='60px' onClick={() => setStatus(!status)}>
        <Status className={status ? 'public' : 'private'}>{status ? 'ON' : 'OFF'}</Status>
      </Box>
      <Order>
        <span className={upSortableClassName} onClick={() => props.clickSortHandler(props.index, true)}>
          ↑
        </span>
        <span className={downSortableClassName} onClick={() => props.clickSortHandler(props.index, false)}>
          ↓
        </span>
      </Order>
      <Box width='100px'>{props.data.id}</Box>
      <Box width='150px'>{props.data.name}</Box>
      <Box width='100px'>&yen; {props.data.price.toLocaleString()}</Box>
      <Description>{props.data.description}</Description>
      <Edit width='40px'>削除</Edit>
      <Edit width='40px'>編集</Edit>
    </Wrapper>
  )
}

export default SubListItem

const Wrapper = styled.li`
  border-top: 1px solid ${(props) => props.theme.colors.border.primary};
  &.private {
    color: ${(props) => props.theme.colors.action.disabled};
  }
  &:hover {
    background: ${(props) => props.theme.colors.action.hover};
  }
`
const Order = styled.div`
  width: 60px;
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const Edit = styled(Box)`
  color: ${(props) => props.theme.colors.text.link};
  cursor: pointer;
  text-align: center;
  &:hover {
    opacity: 0.7;
  }
`
const Status = styled.span`
  display: inline-block;
  padding: 0 4px;
  border-radius: 4px;
  transition: all 0.2s;
  width: 70%;
  text-align: center;
  color: ${(props) => props.theme.colors.text.contrast};
  &.public {
    background: ${(props) => props.theme.colors.text.link};
  }
  &.private {
    background: ${(props) => props.theme.colors.action.disabled};
  }
`
