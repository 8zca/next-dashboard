import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from 'reflexbox/styled-components'
import SubListItem from './SubListItem'
import { items } from '@/data/category'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

type Props = {
  id: number
}
type ItemType = typeof items[0][0]

const SubList: React.FC<Props> = ({ id }) => {
  const [state, setState] = useState({ list: items[id] })

  const onDragEnd = (result: any) => {
    if (!result.destination) return
    if (result.destination.index === result.source.index) return

    const list = reorder(state.list, result.source.index, result.destination.index)

    setState({ list })
  }

  return (
    <Wrapper>
      <li className='header'>
        <Box width='60px'>公開</Box>
        <Box width='100px'>商品ID</Box>
        <Box width='150px'>商品名</Box>
        <Box width='100px'>金額</Box>
        <Box flex={1}>説明</Box>
        <Box width='40px' />
        <Box width='40px' />
      </li>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='sub-list'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {state.list.map((row, index) => (
                <Draggable draggableId={row.id.toString()} index={index} key={row.id}>
                  {(providedNest) => (
                    <div ref={providedNest.innerRef} {...providedNest.draggableProps} {...providedNest.dragHandleProps}>
                      <SubListItem key={row.id} data={row} index={index} last={index === items[id].length - 1} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Wrapper>
  )
}

const reorder = (list: ItemType[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
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
